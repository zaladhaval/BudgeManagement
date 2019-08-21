package com.budget.management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.budget.management.model.UserMetaModel;
import com.budget.management.model.UserModel;
import com.budget.management.reposetory.UserReposetory;
import com.budget.management.system.RandomToken;

@Controller
@RequestMapping("/usermanagement")
public class UserManagementController {
	
	@Autowired
	UserReposetory userReposetory;
	
	@Autowired
	RandomToken randomToken;
	
	@PostMapping("/add")
	public @ResponseBody Object saveuser(@RequestBody UserModel userModel) {
		try {
			UserMetaModel userMetaModel=new UserMetaModel();
			userMetaModel.setContact(userModel.getContact());
			userMetaModel.setEmail(userModel.getEmail());
			userMetaModel.setfName(userModel.getfName());
			userMetaModel.setlName(userModel.getlName());
			userModel.setPassword(userModel.getPassword());
			userMetaModel.setToken(randomToken.getToken(10));
			userReposetory.save(userMetaModel);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
