package com.budget.management.reposetory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.budget.management.model.IncomeMetaModel;

public interface IncomeReposetory extends JpaRepository<IncomeMetaModel, Integer> {

	@Query("SELECT SUM(x.amount) FROM IncomeMetaModel x WHERE x.userid = ?1")
	int getsum(String userid);
	
	public List<IncomeMetaModel> findAllByOrderByDateDesc();
	
	public List<IncomeMetaModel> findByUseridAndDateContainingOrderByDateDesc(String userid,String date);
	
	@Query("SELECT x.date FROM IncomeMetaModel x WHERE x.userid = ?1 GROUP BY x.date")
	public List<String> getgroup(String userid);
}
