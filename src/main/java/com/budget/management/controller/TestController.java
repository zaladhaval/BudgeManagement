package com.budget.management.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.budget.management.reposetory.ExpenceReposetory;
import com.budget.management.reposetory.IncomeReposetory;

@RestController
public class TestController {

	@Autowired
	ExpenceReposetory expenceReposetory;

	@Autowired
	IncomeReposetory incomeReposetory;

	@GetMapping("/testsum")
	public Object name(HttpSession session) {
		Map<String, Integer> data = new HashMap<String, Integer>();
		data.put("totalinc", incomeReposetory.getsum(session.getAttribute("token").toString()));
		data.put("totalexp", expenceReposetory.getsum(session.getAttribute("token").toString()));
		data.put("remain", incomeReposetory.getsum(session.getAttribute("token").toString())
				- expenceReposetory.getsum(session.getAttribute("token").toString()));
		return data;
	}

	@GetMapping("/testdate")
	public Object testdategruop() {
		Set<String> finaldata=new HashSet<String>();
		List<String> exp =expenceReposetory.getgroup("TUDVM1V33Y");
		List<String> inc=incomeReposetory.getgroup("TUDVM1V33Y");
		for (String string : inc) {
			string=string.substring(0, 7);
			finaldata.add(string);
		}
		for (String string : exp) {
			string=string.substring(0, 7);
			finaldata.add(string);
		};
		List<String> numbersList = new ArrayList<String>(finaldata);
		Collections.sort(numbersList);
		  //ArrayList<String> al =(ArrayList<String>)finaldata.toArray();
		return numbersList;
	}
}
