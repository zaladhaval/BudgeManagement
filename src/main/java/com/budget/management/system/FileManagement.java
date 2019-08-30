package com.budget.management.system;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.multipart.MultipartFile;

@Service
@CrossOrigin(origins = "*")
public class FileManagement {
	@Autowired
	HttpServletRequest request;

	@Autowired
	HttpServletResponse response;

	@Autowired
	HttpSession session;

	public FileManagement() {

	}

	public Object downloadFile(String filePath) throws Exception {
		return getFile(request, response, filePath, session);
	}

	private Object getFile(HttpServletRequest request, HttpServletResponse response, String filePath,
			HttpSession session) throws Exception {

		try {
			File file = new File(filePath);

			if (file.exists()) {
				InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

				return ResponseEntity.ok()
						.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"")
						.body(resource);
			}
		} catch (Exception e) {

		}
		return false;
	}

	public Object uploadFile(MultipartFile file, String destinationPath, String filenames) {

		File file2 = new File(destinationPath);
		if (!file2.exists()) {
			file2.mkdirs();
		}

		String fileName = StringUtils.cleanPath(filenames);
		Path fileStorageLocation = Paths.get(destinationPath).toAbsolutePath().normalize();

		try {
			// Check if the file's name contains invalid characters
			if (fileName.contains("..")) {
				throw new FileStorageException1("Sorry! Filename contains invalid path sequence " + fileName);
			}

			// Copy file to the target location (Replacing existing file with the same name)
			Path targetLocation = fileStorageLocation.resolve(fileName);
			Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
			Map<String, Object> map = new HashMap<>();
			map.put("fileName", fileName);
			map.put("fileType", file.getContentType());
			map.put("size", file.getSize());
			map.put("path", targetLocation.getParent());
			return map;
		} catch (IOException ex) {
			throw new FileStorageException1("Could not store file " + fileName + ". Please try again!", ex);
		}

	}

	private class FileStorageException1 extends RuntimeException {
		/**
		 * 
		 */
		private static final long serialVersionUID = 1L;

		public FileStorageException1(String message) {
			super(message);
		}

		public FileStorageException1(String message, Throwable cause) {
			super(message, cause);
		}
	}

}

