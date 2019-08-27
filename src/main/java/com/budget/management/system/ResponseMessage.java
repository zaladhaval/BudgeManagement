package com.budget.management.system;

import java.util.HashMap;
import java.util.Map;

public class ResponseMessage {

	public static Map<String, Object> message(String message,int code,boolean status) {
		Map<String, Object> map=new HashMap<String, Object>();
		map.put(Variables.code, code);
		map.put(Variables.status, status);
		map.put(Variables.message, message);
		return map;
		
	}
	
	public static Map<String, Object> message(String message,int code,boolean status,Object data) {
		Map<String, Object> map=new HashMap<String, Object>();
		map.put(Variables.code, code);
		map.put(Variables.status, status);
		map.put(Variables.message, message);
		map.put(Variables.data, data);
		return map;
		
	}
}
