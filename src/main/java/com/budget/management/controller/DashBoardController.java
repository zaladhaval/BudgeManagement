package com.budget.management.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	public @ResponseBody Object counter(@RequestParam String date, HttpServletResponse response, HttpSession session) {
		try {
			if (!LoginController.userValidate(session)) {
				response.sendRedirect("/");
				return null;
			}
			String inc=incomeReposetory.getsum(session.getAttribute("token").toString(), date);
			String exp=expenceReposetory.getsum(session.getAttribute("token").toString(), date);
			
			String inct=incomeReposetory.getsumtotal(session.getAttribute("token").toString());
			String expt=expenceReposetory.getsumtotal(session.getAttribute("token").toString());
			int incometotal= inct==null ? 0 : Integer.parseInt(inct);
			int exptotal=expt==null ? 0 : Integer.parseInt(expt);

			int incomesum = inc==null ? 0 : Integer.parseInt(inc);
			int expsum = exp==null ? 0 : Integer.parseInt(exp);;
		
			Map<String, Integer> data = new HashMap<String, Integer>();
			data.put("totalinc", incomesum);
			data.put("totalexp", expsum);
			data.put("remain", incomesum - expsum);
			data.put("totalremain", incometotal-exptotal);
			return ResponseMessage.message("Counter Data", Variables.successCode, true, data);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseMessage.message(Variables.errorMessage, Variables.serverErrorCode, false);
		}
	}

	@GetMapping("/getdureations")
	public @ResponseBody Object range(HttpServletResponse response, HttpSession session) {
		try {
			if (!LoginController.userValidate(session)) {
				response.sendRedirect("/");
				return null;
			}
			Set<String> finaldata = new HashSet<String>();
			List<String> exp = expenceReposetory.getgroup(session.getAttribute("token").toString());
			List<String> inc = incomeReposetory.getgroup(session.getAttribute("token").toString());
			for (String string : inc) {
				string = string.substring(0, 7);
				finaldata.add(string);
			}
			for (String string : exp) {
				string = string.substring(0, 7);
				finaldata.add(string);
			}
			List<String> datelist = new ArrayList<String>(finaldata);
			Collections.sort(datelist, Collections.reverseOrder());
			return ResponseMessage.message("ActionData", Variables.successCode, true, datelist);
		} catch (Exception e) {
			return ResponseMessage.message(Variables.errorMessage, Variables.serverErrorCode, false);
		}
	}
}
