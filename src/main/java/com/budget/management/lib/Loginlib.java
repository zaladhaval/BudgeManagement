package com.budget.management.lib;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class Loginlib {

	String error = null;

	@GetMapping("")
	public ModelAndView loginpage(HttpSession session, HttpServletResponse response) throws Exception {

		String temp = error;
		error = null;

		return new ModelAndView("login", "error", temp);
	}

	@GetMapping("/signup")
	public String showreg() {
		return "register";
	}
	
	@GetMapping("/test")
	public String test() {
		return "test";
	}
}
