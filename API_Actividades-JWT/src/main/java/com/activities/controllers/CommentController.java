package com.activities.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.activities.DTO.ActivityComment;
import com.activities.DTO.FindAllActivityDTO;
import com.activities.entities.Comment;
import com.activities.repositories.ActivitiRepo;
import com.activities.repositories.CommentRepo;
import com.activities.repositories.UserRepo;
import com.activities.services.JwtService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin
@RequestMapping("/commentario")
public class CommentController {
	@Autowired
	ActivitiRepo activityRepo;
	
	@Autowired
	UserRepo userRepo;
	
	@Autowired
	CommentRepo commentRepo;

	@Autowired
    JwtService jwtService;
	
	@GetMapping("/findByActivity/{id}")
	public ResponseEntity findByActivity(@PathVariable(value = "id") long id) {
		List<ActivityComment> comments = new ArrayList<ActivityComment>(); 
		for (Comment c : commentRepo.findByActivity_id(id)) {
			ActivityComment ac = new ActivityComment();
			ac.setId(c.getId());
			ac.setComment(c.getComment());
			ac.setUsername(c.getUser().getUsername());
			ac.setActivity(""+c.getActivity().getId());
			comments.add(ac);
		}
		
		return new ResponseEntity<>(comments, HttpStatus.OK);
	}
	
	@GetMapping("/findByUser/{id}")
	public ResponseEntity findByUser(@PathVariable(value = "id") String id) {
		List<ActivityComment> comments = new ArrayList<ActivityComment>(); 
		for (Comment c : commentRepo.findByUser_id(Long.parseLong(jwtService.extractUsername(id)))) {
			ActivityComment ac = new ActivityComment();
			ac.setId(c.getId());
			ac.setComment(c.getComment());
			ac.setUsername(c.getUser().getUsername());
			ac.setActivity(""+c.getActivity().getId());
			comments.add(ac);
		}
		
		return new ResponseEntity<>(comments, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public void postMethodName(@RequestBody ActivityComment comment) {
		System.out.println(comment);
		Comment c = new Comment();
		c.setComment(comment.getComment());
		c.setValoraciones(0);
		c.setActivity(activityRepo.findById(Long.parseLong(comment.getActivity())));
		c.setUser(userRepo.findById(Long.parseLong(jwtService.extractUsername(comment.getUsername()))));
		commentRepo.save(c);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteComment(@PathVariable(value = "id") long id) {
		commentRepo.delete(commentRepo.findById(id));
	}
	
}
