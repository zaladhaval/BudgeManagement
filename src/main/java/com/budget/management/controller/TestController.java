package com.budget.management.controller;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
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
		//data.put("totalinc", incomeReposetory.getsum(session.getAttribute("token").toString()));
		//data.put("totalexp", expenceReposetory.getsum(session.getAttribute("token").toString()));
		//data.put("remain", incomeReposetory.getsum(session.getAttribute("token").toString())- expenceReposetory.getsum(session.getAttribute("token").toString()));
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
		return numbersList;
	}
	
	@GetMapping("/datetest")
	public Object datetest() {
		LocalDate localDate=LocalDate.now();
		String d=localDate.toString();
		return d.substring(7);
	}
	
	@GetMapping("/daterangeteat")
	public Object daterangetest() throws Exception{
		String da="2019-08";
		LocalDate localDate=LocalDate.now();
		da=da+"-"+localDate.getDayOfMonth();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date = sdf.parse(da);
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.add(Calendar.DAY_OF_YEAR, -6);
		List<String> dates=new ArrayList<String>();
		for(int i = 0; i< 6; i++){
		    cal.add(Calendar.DAY_OF_YEAR, 1);
		    dates.add(sdf.format(cal.getTime()));
		}
		
		return expenceReposetory.findByDateIn(dates);
	}
}
