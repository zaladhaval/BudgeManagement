package com.budget.management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.budget.management.model.UserMetaModel;
import com.budget.management.reposetory.UserReposetory;
import com.budget.management.system.ResponseMessage;

@Controller
@RequestMapping("/validtion")
public class ValidationController {

	@Autowired
	UserReposetory userReposetory;

	@PostMapping("/mail")
	public @ResponseBody Object validMail(@RequestParam String email) {
		try {
			UserMetaModel userMetaModel = userReposetory.findByemail(email);
			if (userMetaModel == null) {
				return ResponseMessage.message("not Exist", 200, true);

			} else {
				return ResponseMessage.message("Email already Exist", 404, false);
			}
		} catch (Exception e) {
			return ResponseMessage.message("Some error accured", 500, false);
		}

	}

	@PostMapping("/contact")
	public @ResponseBody Object validContact(@RequestParam String contact) {
		try {
			UserMetaModel userMetaModel = userReposetory.findBycontact(contact);
			if (userMetaModel == null) {
				return ResponseMessage.message("not Exist", 200, true);

			} else {
				return ResponseMessage.message("Contact already Exist", 404, false);
			}
		} catch (Exception e) {
			return ResponseMessage.message("Some error accured", 500, false);
		}

	}

	@PostMapping("/username")
	public @ResponseBody Object validUsername(@RequestParam String username) {
		try {
			UserMetaModel userMetaModel = userReposetory.findByUsername(username);
			if (userMetaModel == null) {
				return ResponseMessage.message("not Exist", 200, true);

			} else {
				return ResponseMessage.message("User Name already Exist", 404, false);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseMessage.message("Some error accured", 500, false);
		}
	}
}
