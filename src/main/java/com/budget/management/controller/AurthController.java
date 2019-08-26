package com.budget.management.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.budget.management.model.UserMetaModel;
import com.budget.management.reposetory.UserReposetory;

@Controller
@RequestMapping("/auth")
public class AurthController {

	String error = null;

	@Autowired
	UserReposetory userrepo;

	
	@PostMapping(value = "/authenticate")
	public @ResponseBody Object auth(HttpServletResponse response, HttpServletRequest request, HttpSession session,
			@RequestParam String username, @RequestParam String password) throws Exception {
		UserMetaModel usermodel = userrepo.findByUsername(username);
		try {

			if (usermodel.getUsername().equals(username) && usermodel.getPassword().equals(password)) {

				session = request.getSession();
				session.setAttribute("userid", usermodel.getToken());
				session.setAttribute("username", usermodel.getUsername());
				session.setAttribute("token", usermodel.getToken());

				session.setAttribute("password", usermodel.getPassword());

				usermodel.setAttempt(0);
				userrepo.save(usermodel);
				response.sendRedirect("/dashboard");
				return null;
			} else {
				if (!usermodel.isStatus()) {
					error = "Your account has been blocked";
					response.sendRedirect("/");
					return null;
				}

				usermodel.setAttempt(usermodel.getAttempt() + 1);
				userrepo.save(usermodel);
				if (usermodel.getAttempt() >= 3) {
					usermodel.setStatus(false);
					usermodel.setAttempt(0);
					userrepo.save(usermodel);
					error = "Your account has been blocked";
					response.sendRedirect("/");
					return null;
				}

				error = "Invalid username and password";
				response.sendRedirect("/");
				return null;
			}
		} catch (Exception e) {
			error = "Invalid username and password";
			response.sendRedirect("/");
			return null;
		}
	}

	@RequestMapping("/logout")
	public String logout(HttpSession session, HttpServletResponse response) throws Exception {
		if (session.getAttributeNames() != null) {
			session.invalidate();
			response.sendRedirect("/");
			return null;
		}
		return null;
	}
}
