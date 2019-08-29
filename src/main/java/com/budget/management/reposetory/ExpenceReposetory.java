package com.budget.management.reposetory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.budget.management.model.ExpenceMetaModel;

public interface ExpenceReposetory extends JpaRepository<ExpenceMetaModel, Integer> {

	@Query("SELECT SUM(x.amount) FROM ExpenceMetaModel x WHERE x.userid = ?1 AND x.date Like ?2%")
	String getsum(String usrid, String date);
	
	@Query("SELECT SUM(x.amount) FROM ExpenceMetaModel x WHERE x.userid = ?1")
	String getsumtotal(String userid);

	public List<ExpenceMetaModel> findAllByOrderByDateDesc();

	public List<ExpenceMetaModel> findByuserid(String userid);
	
	public List<ExpenceMetaModel> findByDateIn(List<String> dates);

	public List<ExpenceMetaModel> findByUseridAndDateContainingOrderByDateDesc(String userid, String date);

	@Query("SELECT x.date FROM ExpenceMetaModel x WHERE x.userid = ?1 GROUP BY x.date")
	public List<String> getgroup(String userid);

}
