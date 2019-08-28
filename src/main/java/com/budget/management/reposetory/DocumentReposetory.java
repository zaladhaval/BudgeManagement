package com.budget.management.reposetory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.budget.management.model.DocumentMetaModel;

public interface DocumentReposetory extends JpaRepository<DocumentMetaModel, Integer> {
	
	List<DocumentMetaModel> findByuserid(String usrid);

}
