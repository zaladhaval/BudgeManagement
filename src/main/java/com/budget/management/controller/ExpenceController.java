package com.budget.management.controller;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.budget.management.lib.LoginController;
import com.budget.management.model.ExpenceIncomeDetailModel;
import com.budget.management.model.ExpenceMetaModel;
import com.budget.management.model.IncomeMetaModel;
import com.budget.management.reposetory.ExpenceReposetory;
import com.budget.management.reposetory.IncomeReposetory;
import com.budget.management.system.RandomToken;
import com.budget.management.system.ResponseMessage;
import com.budget.management.system.Variables;

@Controller
@RequestMapping("/expense")
public class ExpenceController {

	@Autowired
	RandomToken randomToken;

	@Autowired
	IncomeReposetory incomereposetory;

	@Autowired
	ExpenceReposetory expenceReposetory;

	@GetMapping("")
	public String index(Model model, HttpServletResponse response, HttpSession session) throws Exception {
		if (!LoginController.userValidate(session)) {
			response.sendRedirect("/");
			return null;
		}
		model.addAttribute("page", "expense");
		return "template";
	}

	@PostMapping("/add")
	public @ResponseBody Object addexpence(@RequestBody ExpenceIncomeDetailModel expenceIncomeDetailModel,
			HttpServletResponse response, HttpSession session) {
		try {
			if (!LoginController.userValidate(session)) {
				response.sendRedirect("/");
				return null;
			}
			if (expenceIncomeDetailModel.getType().equals("Expence")) {
				ExpenceMetaModel expenceMetaModel = new ExpenceMetaModel();
				expenceMetaModel.setAmount(expenceIncomeDetailModel.getAmount());
				expenceMetaModel.setDate(expenceIncomeDetailModel.getDate());
				expenceMetaModel.setUserid(session.getAttribute("token").toString());
				expenceMetaModel.setDescription(expenceIncomeDetailModel.getDescription());
				expenceMetaModel.setType(expenceIncomeDetailModel.getType());
				expenceMetaModel.setToken(randomToken.getToken(10));
				expenceReposetory.save(expenceMetaModel);
				return ResponseMessage.message("Expence Added Successfully", Variables.successCode, true);
			} else {
				IncomeMetaModel incomeMetaModel = new IncomeMetaModel();
				incomeMetaModel.setAmount(expenceIncomeDetailModel.getAmount());
				incomeMetaModel.setUserid(session.getAttribute("token").toString());
				incomeMetaModel.setDate(expenceIncomeDetailModel.getDate());
				incomeMetaModel.setDescription(expenceIncomeDetailModel.getDescription());
				incomeMetaModel.setType(expenceIncomeDetailModel.getType());
				incomeMetaModel.setToken(randomToken.getToken(10));
				incomereposetory.save(incomeMetaModel);
				return ResponseMessage.message("Expence Added Successfully", Variables.successCode, true);
			}

		} catch (Exception e) {
			return ResponseMessage.message(Variables.errorMessage, Variables.serverErrorCode, false);
		}
	}

	@GetMapping("/getallincome")
	public @ResponseBody Object getallinc(@RequestParam String date, HttpServletResponse response, HttpSession session)
			throws Exception {
		if (!LoginController.userValidate(session)) {
			response.sendRedirect("/");
			return null;
		}
		return incomereposetory.findByUseridAndDateContainingOrderByDateDesc(session.getAttribute("token").toString(),
				date.trim());
	}

	@GetMapping("/getallexpence")
	public @ResponseBody Object getallexp(@RequestParam String date, HttpServletResponse response, HttpSession session)
			throws Exception {
		if (!LoginController.userValidate(session)) {
			response.sendRedirect("/");
			return null;
		}
		return expenceReposetory.findByUseridAndDateContainingOrderByDateDesc(session.getAttribute("token").toString(),
				date.trim());
	}
	
	@GetMapping("/getallexpenceweek")
	public @ResponseBody Object getallexpweek(@RequestParam String date, HttpServletResponse response, HttpSession session)
			throws Exception {
		if (!LoginController.userValidate(session)) {
			response.sendRedirect("/");
			return null;
		}
		
		LocalDate localDate=LocalDate.now();
		date=date+"-"+localDate.getDayOfMonth();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date1 = sdf.parse(date);
		Calendar cal = Calendar.getInstance();
		cal.setTime(date1);
		cal.add(Calendar.DAY_OF_YEAR, -6);
		List<String> dates=new ArrayList<String>();
		for(int i = 0; i< 6; i++){
		    cal.add(Calendar.DAY_OF_YEAR, 1);
		    dates.add(sdf.format(cal.getTime()));
		}
		
		return expenceReposetory.findByDateIn(dates);
	}
	
	
	@GetMapping("/getallinceweek")
	public @ResponseBody Object getallincweek(@RequestParam String date, HttpServletResponse response, HttpSession session)
			throws Exception {
		if (!LoginController.userValidate(session)) {
			response.sendRedirect("/");
			return null;
		}
		
		LocalDate localDate=LocalDate.now();
		date=date+"-"+localDate.getDayOfMonth();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date1 = sdf.parse(date);
		Calendar cal = Calendar.getInstance();
		cal.setTime(date1);
		cal.add(Calendar.DAY_OF_YEAR, -6);
		List<String> dates=new ArrayList<String>();
		for(int i = 0; i< 6; i++){
		    cal.add(Calendar.DAY_OF_YEAR, 1);
		    dates.add(sdf.format(cal.getTime()));
		}
		
		return incomereposetory.findByDateIn(dates);
	}
}
