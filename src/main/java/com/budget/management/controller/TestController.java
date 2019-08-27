package com.budget.management.controller;

import java.util.HashMap;
import java.util.Map;

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
	public Object name() {
		Map<String, Integer> data=new HashMap<String, Integer>();
		data.put("totalinc", incomeReposetory.getsum());
		data.put("totalexp", expenceReposetory.getsum());
		data.put("remain", incomeReposetory.getsum()-expenceReposetory.getsum());
		return data;
	}
}
