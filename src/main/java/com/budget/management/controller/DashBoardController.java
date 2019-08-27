package com.budget.management.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.budget.management.lib.LoginController;
import com.budget.management.reposetory.ExpenceReposetory;
import com.budget.management.reposetory.IncomeReposetory;
import com.budget.management.system.ResponseMessage;
import com.budget.management.system.Variables;

@Controller
@RequestMapping("/dashboard")
public class DashBoardController {
	
	@Autowired
	ExpenceReposetory expenceReposetory;
	
	@Autowired
	IncomeReposetory incomeReposetory;

	@GetMapping("")
	public String index(Model model, HttpServletResponse response, HttpSession session) throws Exception {
		if (!LoginController.userValidate(session)) {
			response.sendRedirect("/");
			return null;
		}

		model.addAttribute("page", "dashboard");
		return "template";
	}

	@GetMapping("/counterdetails")
	public @ResponseBody Object demo(HttpServletResponse response, HttpSession session) {
		try {
			if (!LoginController.userValidate(session)) {
				response.sendRedirect("/");
				return null;
			}
			Map<String, Integer> data=new HashMap<String, Integer>();
			data.put("totalinc", incomeReposetory.getsum());
			data.put("totalexp", expenceReposetory.getsum());
			data.put("remain", incomeReposetory.getsum()-expenceReposetory.getsum());
			return ResponseMessage.message("Counter Data",  Variables.successCode, true,data);
		} catch (Exception e) {
			return ResponseMessage.message(Variables.errorMessage, Variables.serverErrorCode, false);
		}
	}
}
