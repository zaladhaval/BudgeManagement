package com.budget.management.system;

import java.io.File;
import java.net.URLDecoder;
import com.budget.management.BudgetManagementApplication;

public class DirPath {
	public static String setPath() throws Exception {

		String path = BudgetManagementApplication.class.getProtectionDomain().getCodeSource().getLocation().getPath();
		String decodedPath = URLDecoder.decode(path, "UTF-8");
		File jarFile = new File(decodedPath);
		String jarDir = jarFile.getParentFile().getParentFile().getParent();
		StringBuilder builder2 = new StringBuilder(jarDir);
		// builder2.delete(0, 6);
		String s = builder2.toString();

		String systemType = System.getProperty("os.name");

		if (systemType.contains("Windows")) {
			return s;
		} else {
			if (systemType.contains("Mac")) {
				return s + "/etc";
			} else {
				return "/etc";
			}

		}

	}

}