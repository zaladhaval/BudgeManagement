package com.budget.management.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.budget.management.model.UserMetaModel;
import com.budget.management.reposetory.UserReposetory;
import com.budget.management.system.ResponseMessage;

@Controller
public class AurthController {

	String error = null;

	@Autowired
	UserReposetory userrepo;

	@GetMapping("/")
	public ModelAndView loginpage(HttpSession session, HttpServletResponse response) throws Exception {

		String temp = error;
		error = null;

		return new ModelAndView("login", "error", temp);
	}

	@PostMapping("/authenticate")
	public @ResponseBody Object auth(HttpServletRequest request, HttpSession session, @RequestParam String username,
			@RequestParam String password) throws Exception {

		try {
			UserMetaModel usermodel = userrepo.findByUsername(username);
			if (usermodel != null) {
				if (usermodel.getUsername().equals(username) && BCrypt.checkpw(password, usermodel.getPassword())
						&& usermodel.isStatus()) {

					session = request.getSession();
					session.setAttribute("username", usermodel.getEmail());
					session.setAttribute("token", usermodel.getToken());

					session.setAttribute("name", usermodel.getFullName());

					session.setAttribute("password", usermodel.getPassword());

					usermodel.setAttempt(0);
					userrepo.save(usermodel);

					return ResponseMessage.message("User login Successfullhy", 200, true);
				} else {
					if (!usermodel.isStatus()) {
						error = "Your account has been blocked";
						return ResponseMessage.message("Your account has been blocked", 403, false);
					}

					usermodel.setAttempt(usermodel.getAttempt() + 1);
					userrepo.save(usermodel);
					if (usermodel.getAttempt() >= 3) {
						usermodel.setStatus(false);
						usermodel.setAttempt(0);
						userrepo.save(usermodel);
						error = "Your account has been blocked";
						return ResponseMessage.message("Your account has been blocked", 403, false);
					}
					error = "Invalid username and password";
					return ResponseMessage.message("Invalid username and password", 403, false);
				}

			} else {
				error = "User Name dose not exist";
				return ResponseMessage.message("User Name dose not exist", 403, false);
			}
		} catch (Exception e) {
			error = "Some Problem has occured";
			return ResponseMessage.message("Some Problem has occured", 500, false);
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
