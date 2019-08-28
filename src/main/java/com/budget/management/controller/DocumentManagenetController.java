package com.budget.management.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.budget.management.lib.LoginController;
import com.budget.management.reposetory.DocumentReposetory;
import com.budget.management.system.DirPath;
import com.budget.management.system.FileManagement;

@Controller
@RequestMapping("/document")
public class DocumentManagenetController {
	
	@Autowired
	DocumentReposetory documentReposetory;
	
	@Autowired
	FileManagement filemanagement;

	@GetMapping("")
	public String index(Model model, HttpServletResponse response, HttpSession session) throws Exception {
		if (!LoginController.userValidate(session)) {
			response.sendRedirect("/");
			return null;
		}
		model.addAttribute("page", "documents");
		return "template";
	}
	
	@GetMapping("/getall")
	public @ResponseBody Object getall(HttpServletResponse response, HttpSession session) throws Exception {
		if (!LoginController.userValidate(session)) {
			response.sendRedirect("/");
			return null;
		}
		return documentReposetory.findByuserid(session.getAttribute("token").toString());
	}

	@GetMapping("/download")
	public @ResponseBody Object downloadfie(@RequestParam String name, HttpServletResponse response, HttpSession session) throws Exception {
		if (!LoginController.userValidate(session)) {
			response.sendRedirect("/");
			return null;
		}
		String path = DirPath.setPath() + "/docs/" + session.getAttribute("token")+"/"+name;
		return filemanagement.downloadFile(path);
	}
}
