package com.budget.management.reposetory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.budget.management.model.ExpenceMetaModel;

public interface ExpenceReposetory extends JpaRepository<ExpenceMetaModel, Integer> {

	@Query("SELECT SUM(x.amount) FROM ExpenceMetaModel x")
	int getsum();
	
	 public List<ExpenceMetaModel> findAllByOrderByDateDesc();
	 
	/*
	 * @Query("SELECT SUM(x.amount) FROM ExpenceMetaModel x WHERE x.Type = ?1") int
	 * getsum(String type);
	 */
}
