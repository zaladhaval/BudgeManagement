package com.budget.management.controller;

import java.io.File;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.budget.management.lib.LoginController;
import com.budget.management.model.DocumentMetaModel;
import com.budget.management.reposetory.DocumentReposetory;
import com.budget.management.system.DirPath;
import com.budget.management.system.FileManagement;
import com.budget.management.system.ResponseMessage;
import com.budget.management.system.Variables;

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
	public @ResponseBody Object downloadfie(@RequestParam String name, HttpServletResponse response,
			HttpSession session) throws Exception {
		if (!LoginController.userValidate(session)) {
			response.sendRedirect("/");
			return null;
		}
		String path = DirPath.setPath() + "/docs/" + session.getAttribute("token") + "/" + name;
		return filemanagement.downloadFile(path);
	}

	@PostMapping("/delete")
	public @ResponseBody Object delete(@RequestParam String token, HttpServletResponse response, HttpSession session) {
		try {
			if (!LoginController.userValidate(session)) {
				response.sendRedirect("/");
				return null;
			}
			DocumentMetaModel documentMetaModel = documentReposetory.findBytoken(token);
			String path = DirPath.setPath() + "/docs/" + session.getAttribute("token") + "/"
					+ documentMetaModel.getNameOfDocument();
			File file = new File(path);

			if (file.delete()) {
				documentReposetory.delete(documentMetaModel);
				return ResponseMessage.message("File deleted successfully", Variables.successCode, true);
			} else {
				return ResponseMessage.message("Failed to delete the file", Variables.serverErrorCode, false);

			}

		} catch (Exception e) {
			return ResponseMessage.message(Variables.errorMessage, Variables.serverErrorCode, false);
		}
	}
}
