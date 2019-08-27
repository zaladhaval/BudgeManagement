package com.budget.management.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.budget.management.model.IncomeMetaModel;

public interface IncomeReposetory extends JpaRepository<IncomeMetaModel, Integer> {

}
