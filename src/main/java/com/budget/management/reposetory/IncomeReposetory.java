package com.budget.management.reposetory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.budget.management.model.IncomeMetaModel;

public interface IncomeReposetory extends JpaRepository<IncomeMetaModel, Integer> {

	@Query("SELECT SUM(x.amount) FROM IncomeMetaModel x")
	int getsum();
	
	public List<IncomeMetaModel> findAllByOrderByDateDesc();
}
