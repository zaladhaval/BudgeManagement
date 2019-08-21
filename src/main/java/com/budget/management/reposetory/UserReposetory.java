package com.budget.management.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.budget.management.model.UserMetaModel;

public interface UserReposetory extends JpaRepository<UserMetaModel, Integer>{

}
