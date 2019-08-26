package com.budget.management.lib;

import javax.servlet.http.HttpSession;

public class LoginController 
{
	 static public  boolean userValidate(HttpSession session)
	 {
		if(session.getAttribute("username")!=null && session.getAttribute("password")!=null) 
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}
