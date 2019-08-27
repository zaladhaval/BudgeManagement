package com.budget.management.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.budget.management.model.DocumentUploadMetaModel;

public interface DocumentUploadReposetory extends JpaRepository<DocumentUploadMetaModel, Integer> {

}
