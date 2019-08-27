package com.budget.management.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.budget.management.lib.LoginController;
import com.budget.management.model.UserMetaModel;
import com.budget.management.model.UserModel;
import com.budget.management.reposetory.UserReposetory;
import com.budget.management.system.RandomToken;
import com.budget.management.system.ResponseMessage;

@Controller
@RequestMapping("/usermanagement")
public class UserManagementController {

	@Autowired
	UserReposetory userReposetory;

	@Autowired
	RandomToken randomToken;

	@PostMapping("/add")
	public @ResponseBody Object saveuser(@RequestBody UserModel userModel, HttpServletResponse response) {
		try {
			UserMetaModel userMetaModel = new UserMetaModel();
			userMetaModel.setFullName(userModel.getFullName());
			userMetaModel.setEmail(userModel.getEmail());
			userMetaModel.setContact(userModel.getContact());
			userMetaModel.setCity(userModel.getCity());
			userMetaModel.setPassword(userModel.getPassword());
			userMetaModel.setUsername(userModel.getUsername());
			userMetaModel.setCountry(userModel.getCountry());
			userMetaModel.setToken(randomToken.getToken(10));
			userReposetory.save(userMetaModel);
			return ResponseMessage.message("User Added Successfully", 200, true);
		} catch (Exception e) {
			// e.printStackTrace();
			Throwable t;
			for (t = e.getCause(); t != null; t = t.getCause()) {
				System.out.println(1);
				System.out.println(t);
			}
			return ResponseMessage.message("some error occurred", 401, false);
		}

	}

	@GetMapping("/getuser")
	public @ResponseBody Object getUser(HttpServletResponse response, HttpSession session) {
		try {
			
			if (!LoginController.userValidate(session)) {
				response.sendRedirect("/");
				return null;
			}
			UserMetaModel userMetaModel = userReposetory.findBytoken(session.getAttribute("token").toString());
			if (userMetaModel != null) {
				return ResponseMessage.message("User Data Found Successfully", 200, true, userMetaModel);
			} else {
				return ResponseMessage.message("User Data Not Found", 404, false);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseMessage.message("Some Error has been accured", 500, false);
		}
	}

}
