package com.budget.management.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.budget.management.lib.LoginController;
import com.budget.management.model.DocumentMetaModel;
import com.budget.management.reposetory.DocumentReposetory;
import com.budget.management.system.DirPath;
import com.budget.management.system.FileManagement;
import com.budget.management.system.RandomToken;
import com.budget.management.system.ResponseMessage;
import com.budget.management.system.Variables;

@Controller
@RequestMapping("/uploadDocument")
public class UploadDocumentController {

	@Autowired
	FileManagement filemanagement;

	@Autowired
	RandomToken randomToken;

	@Autowired
	DocumentReposetory documentReposetory;

	@GetMapping("")
	public String index(Model model, HttpServletResponse response, HttpSession session) throws Exception {
		if (!LoginController.userValidate(session)) {
			response.sendRedirect("/");
			return null;
		}
		model.addAttribute("page", "uploadDocument");
		return "template";
	}

	@PostMapping("/uploaddoc")
	public @ResponseBody Object uploadDoc(@RequestParam("file") MultipartFile file, @RequestParam("name") String name,
			@RequestParam("type") String type, HttpServletResponse response, HttpSession session) {
		try {
			if (!LoginController.userValidate(session)) {
				response.sendRedirect("/");
				return null;
			}
			String path = DirPath.setPath() + "/docs/" + session.getAttribute("token");

			String filename = name +"-"+session.getAttribute("token")+"-"+randomToken.getToken(10) + "."
					+ FilenameUtils.getExtension(file.getOriginalFilename());

			filemanagement.uploadFile(file, path, filename);
			DocumentMetaModel documentMetaModel = new DocumentMetaModel();
			documentMetaModel.setNameOfDocument(filename);
			documentMetaModel.setName(name);
			documentMetaModel.setToken(randomToken.getToken(10));
			documentMetaModel.setSize(file.getSize());
			documentMetaModel.setType(type.split(" ")[1]);
			documentMetaModel.setTypeIcon(type.split(" ")[0]);
			documentMetaModel.setUserid(session.getAttribute("token").toString());
			documentReposetory.save(documentMetaModel);
			response.sendRedirect("/uploadDocument");
			return ResponseMessage.message("Document Uploded Successfully", Variables.successCode, true);
		} catch (Exception e) {
			return ResponseMessage.message(Variables.errorMessage, Variables.serverErrorCode, false);
		}
	}

	
}
