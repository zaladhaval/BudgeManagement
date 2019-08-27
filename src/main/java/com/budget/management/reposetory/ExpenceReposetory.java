package com.budget.management.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.budget.management.model.ExpenceMetaModel;

public interface ExpenceReposetory extends JpaRepository<ExpenceMetaModel, Integer> {

}
