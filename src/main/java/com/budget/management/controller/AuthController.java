package com.budget.management.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/auth")
public class AuthController {

	@PostMapping("/authenticate")
	public @ResponseBody Object login(HttpServletResponse response, HttpServletRequest request, HttpSession session,
			@RequestParam String username, @RequestParam String password) {
		try {
			
		} catch (Exception e) {
			
		}
		return null;
	}
}
