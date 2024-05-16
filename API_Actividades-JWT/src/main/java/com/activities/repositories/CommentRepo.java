package com.activities.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.activities.entities.Comment;

public interface CommentRepo extends JpaRepository<Comment, Long>{
	public Comment[] findByActivity_id(long id);
	public Comment[] findByUser_id(long id);
	public Comment findById(long id);
}
