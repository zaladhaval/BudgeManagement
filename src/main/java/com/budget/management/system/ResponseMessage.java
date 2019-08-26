package com.budget.management.system;

import java.util.HashMap;
import java.util.Map;

public class ResponseMessage {

	public static Map<String, Object> message(String message,int code,boolean status) {
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("code", code);
		map.put("status", status);
		map.put("message", message);
		return map;
		
	}
}
