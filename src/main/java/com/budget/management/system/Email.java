package com.budget.management.system;

import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;

import org.springframework.stereotype.Service;

@Service
public class Email {
	
	public void send(String to,String sub,String body) {

		try {

			Properties props = System.getProperties();
			props.put("mail.smtp.host", "smtp.gmail.com");
			props.put("mail.smtps.auth", "true");
			props.put("mail.smtp.starttls.enable", "true");
			Session s = Session.getInstance(props, null);

			MimeMessage message = new MimeMessage(s);

			message.setFrom(new InternetAddress("hiral.poshiya@ngivbt.edu.in"));

			message.setRecipients(Message.RecipientType.TO, to);

			message.setSubject(sub);

			BodyPart messageBodyPart = new MimeBodyPart();

			messageBodyPart.setText(body);

			Multipart multipart = new MimeMultipart();

			multipart.addBodyPart(messageBodyPart);

			message.setContent(multipart);

			Transport tr = s.getTransport("smtps");
			tr.connect("smtp.gmail.com", "hiral.poshiya@ngivbt.edu.in", "poshiyah");
			tr.sendMessage(message, message.getAllRecipients());
			tr.close();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}

