package com.budget.management.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/profile")
public class ProfileController {
	
	@GetMapping("")
	public String index(Model model, HttpServletResponse response, HttpSession session) throws Exception {

		model.addAttribute("page", "profile");
		return "template";
	}

}
