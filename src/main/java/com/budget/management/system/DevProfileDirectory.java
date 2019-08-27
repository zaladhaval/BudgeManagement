/*
 * package com.budget.management.system;
 * 
 * import java.io.File; import java.io.UnsupportedEncodingException; import
 * java.net.URLDecoder;
 * 
 * import org.springframework.context.annotation.Profile;
 * 
 * import com.budget.management.BudgetManagementApplication;
 * 
 * @Profile("dev") public class DevProfileDirectory implements DirPath {
 * 
 * @Override public String setPath() throws UnsupportedEncodingException {
 * String path =
 * BudgetManagementApplication.class.getProtectionDomain().getCodeSource().
 * getLocation().getPath(); String decodedPath = URLDecoder.decode(path,
 * "UTF-8"); File jarFile = new File(decodedPath); String jarDir =
 * jarFile.getParentFile().getParentFile().getParent(); StringBuilder builder2 =
 * new StringBuilder(jarDir); String s = builder2.toString();
 * 
 * String systemType = System.getProperty("os.name");
 * 
 * if (systemType.contains("Windows")) { return s; } else { if
 * (systemType.contains("Mac")) { return s + "/etc"; } else { return "/etc"; }
 * 
 * }
 * 
 * }
 * 
 * }
 */