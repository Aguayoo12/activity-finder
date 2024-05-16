package com.activities.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.activities.entities.Activity;

public interface ActivitiRepo extends JpaRepository<Activity, Long>{
	public Activity findById(long id);
	public Activity[] findFirst3ByOrderByIdDesc();
	public Activity[] findByUserId(long id);
	public Activity[] findByType(String type);
}
