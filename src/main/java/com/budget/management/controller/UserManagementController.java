package com.budget.management.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.budget.management.lib.LoginController;
import com.budget.management.model.ChangePasswordModel;
import com.budget.management.model.UserMetaModel;
import com.budget.management.model.UserModel;
import com.budget.management.model.UserUpdateModel;
import com.budget.management.reposetory.UserReposetory;
import com.budget.management.system.RandomToken;
import com.budget.management.system.ResponseMessage;
import com.budget.management.system.Variables;

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
			String hashed_password = BCrypt.hashpw(userModel.getPassword(), BCrypt.gensalt());
			userMetaModel.setPassword(hashed_password);
			userMetaModel.setUsername(userModel.getUsername());
			userMetaModel.setCountry(userModel.getCountry());
			userMetaModel.setToken(randomToken.getToken(10));
			userMetaModel.setStatus(true);
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

	@PostMapping("/updateUser")
	public @ResponseBody Object updateUser(@RequestBody UserUpdateModel userUpdateModel, HttpServletResponse response,
			HttpSession session) {
		try {
			if (!LoginController.userValidate(session)) {
				response.sendRedirect("/");
				return null;
			}
			UserMetaModel userMetaModel = userReposetory.findBytoken(userUpdateModel.getToken());
			userMetaModel.setEmail(userUpdateModel.getEmail());
			userMetaModel.setFullName(userUpdateModel.getFullName());
			userMetaModel.setContact(userUpdateModel.getContact());
			userMetaModel.setCity(userUpdateModel.getCity());
			userMetaModel.setCountry(userUpdateModel.getCountry());

			userReposetory.save(userMetaModel);
			return ResponseMessage.message("User Updated Succssfully", Variables.successCode, true);
		} catch (Exception e) {
			return ResponseMessage.message(Variables.errorMessage, Variables.serverErrorCode, false);
		}
	}

	@PostMapping("/changepassword")
	public @ResponseBody Object changPassword(@RequestBody ChangePasswordModel passwordModel,
			HttpServletResponse response, HttpSession session) {
		try {
			if (!LoginController.userValidate(session)) {
				response.sendRedirect("/");
				return null;
			}
			UserMetaModel userMetaModel = userReposetory.findBytoken(passwordModel.getToken());
			if (BCrypt.checkpw(passwordModel.getPassword(), userMetaModel.getPassword())) {
				if (passwordModel.getNewPassword().equals(passwordModel.getConfirmPassword())) {
					String hashed_password = BCrypt.hashpw(passwordModel.getNewPassword(), BCrypt.gensalt());
					userMetaModel.setPassword(hashed_password);
					userReposetory.save(userMetaModel);
					return ResponseMessage.message("Password Changed Successfully", Variables.successCode, true);
				} else {
					return ResponseMessage.message("Password and Confirm Password did not match",
							Variables.serverErrorCode, false);
				}
			} else {
				return ResponseMessage.message("Old password did not match", Variables.serverErrorCode, false);
			}

		} catch (Exception e) {
			return ResponseMessage.message(Variables.errorMessage, Variables.serverErrorCode, false);
		}
	}

	@PostMapping("/forgetpassword")
	public @ResponseBody Object forgatepassword(@RequestParam String email, HttpServletResponse response,
			HttpSession session) {
		try {
			if (!LoginController.userValidate(session)) {
				response.sendRedirect("/");
				return null;
			}
			System.out.println(email);
			UserMetaModel userMetaModel = userReposetory.findByemail(email);
			System.out.println(email);
			if (userMetaModel != null) {
				return ResponseMessage.message("Password has bean send to your eamil", Variables.successCode, true);
			} else {
				return ResponseMessage.message("Email not found", Variables.notfoundCode, false);
			}

		} catch (Exception e) {
			e.printStackTrace();
			return ResponseMessage.message(Variables.errorMessage, Variables.serverErrorCode, false);
		}
	}
}
