package com.activities.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.activities.DTO.AddActivityDTO;
import com.activities.DTO.FindAllActivityDTO;
import com.activities.DTO.NewActivityDTO;
import com.activities.entities.Activity;
import com.activities.repositories.ActivitiRepo;
import com.activities.repositories.UserRepo;
import com.activities.services.JwtService;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/actividad")
public class ActivityController {

	
	@Autowired
	ActivitiRepo activityRepo;
	
	@Autowired
	UserRepo userRepo;
	

	@Autowired
    JwtService jwtService;
	
	@GetMapping("/findAll")
	public ResponseEntity findAll() {
		List<FindAllActivityDTO> activities = new ArrayList<FindAllActivityDTO>(); 
		for (Activity a : activityRepo.findAll()) {
			FindAllActivityDTO activity = new FindAllActivityDTO(a.getName(), a.getDescription(),
					a.getType(), a.getTime(), a.getCity(), a.getPhoto(), a.getUser().getUsername(), a.getUser().getAvatar(), a.getValoraciones(), a.getId());
			activities.add(activity);
			System.out.println(activity);
			
		}
		
		return new ResponseEntity<>(activities, HttpStatus.OK);
	}
	
	@GetMapping("/findLast")
	public ResponseEntity findPopular() {
		List<FindAllActivityDTO> activities = new ArrayList<FindAllActivityDTO>(); 
		for (Activity a : activityRepo.findFirst3ByOrderByIdDesc()) {
			FindAllActivityDTO activity = new FindAllActivityDTO(a.getName(), a.getDescription(),
					a.getType(), a.getTime(), a.getCity(), a.getPhoto(), a.getUser().getUsername(), a.getUser().getAvatar(), a.getValoraciones(), a.getId());
			activities.add(activity);
			System.out.println(activity);
			
		}
		
		return new ResponseEntity<>(activities, HttpStatus.OK);
	}
	
	@GetMapping("/findUserId/{token}")
	public ResponseEntity findByUserId(@PathVariable(value = "token") String token) {
		List<FindAllActivityDTO> activities = new ArrayList<FindAllActivityDTO>(); 
		for (Activity a : activityRepo.findByUserId(Long.parseLong(jwtService.extractUsername(token)))) {
			FindAllActivityDTO activity = new FindAllActivityDTO(a.getName(), a.getDescription(),
					a.getType(), a.getTime(), a.getCity(), a.getPhoto(), a.getUser().getUsername(), a.getUser().getAvatar(), a.getValoraciones(), a.getId());
			activities.add(activity);
			System.out.println(activity);
			
		}
		
		return new ResponseEntity<>(activities, HttpStatus.OK);
	}
	
	@GetMapping("/findType/{type}")
	public ResponseEntity findByType(@PathVariable(value = "type") String type) {
		List<FindAllActivityDTO> activities = new ArrayList<FindAllActivityDTO>(); 
		for (Activity a : activityRepo.findByType(type)) {
			FindAllActivityDTO activity = new FindAllActivityDTO(a.getName(), a.getDescription(),
					a.getType(), a.getTime(), a.getCity(), a.getPhoto(), a.getUser().getUsername(), a.getUser().getAvatar(), a.getValoraciones(), a.getId());
			activities.add(activity);
			System.out.println(activity);
			
		}
		
		return new ResponseEntity<>(activities, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity findById(@PathVariable(value = "id") long id) { 
		Activity a = activityRepo.findById(id); 
			FindAllActivityDTO activity = new FindAllActivityDTO(a.getName(), a.getDescription(),
					a.getType(), a.getTime(), a.getCity(), a.getPhoto(), a.getUser().getUsername(), a.getUser().getAvatar(), a.getValoraciones(), a.getId());
			System.out.println(activity);
			System.out.println("EStoy pidiendo la actividad");
		
		return new ResponseEntity<>(activity, HttpStatus.OK);
	}

	
	@PostMapping("/newactivity")
	public void saveActivity(@RequestBody NewActivityDTO activity) {
		System.out.println(activity);
		Activity a = new Activity();
		a.setCity(activity.getCity());
		a.setDescription(activity.getDescription());
		a.setName(activity.getName());
		a.setTime(activity.getTime());
		a.setType(activity.getType());
		a.setUser(userRepo.findById(Long.parseLong(jwtService.extractUsername(activity.idUser))));
		a.setPhoto(activity.getPhoto());
		activityRepo.save(a);
	}
	
	@PutMapping("/edit/{id}")
	public void editActivity(@PathVariable(value = "id") long id, @RequestBody NewActivityDTO activity) {
		Activity a = activityRepo.findById(id);
		a.setCity(activity.getCity());
		a.setDescription(activity.getDescription());
		a.setName(activity.getName());
		a.setTime(activity.getTime());
		a.setType(activity.getType());
		a.setUser(userRepo.findById(Long.parseLong(jwtService.extractUsername(activity.idUser))));
		a.setPhoto(activity.getPhoto());
		activityRepo.save(a);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteByid(@PathVariable(value = "id") long id) {
		activityRepo.delete(activityRepo.findById(id));
	}
	
	
	
}
