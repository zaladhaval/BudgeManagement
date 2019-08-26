package com.budget.management.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.budget.management.model.UserMetaModel;

public interface UserReposetory extends JpaRepository<UserMetaModel, Integer>{

	UserMetaModel findByUsername(String username);
	UserMetaModel findByemail(String email);
	UserMetaModel findBycontact(String contact);
}
