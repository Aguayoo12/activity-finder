package com.activities.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.activities.entities.User;

public interface UserRepo extends JpaRepository<User, Long>{
	public User findById(long id);
	public Optional<User> findByUsernameAndPassword(String username, String password);
}
