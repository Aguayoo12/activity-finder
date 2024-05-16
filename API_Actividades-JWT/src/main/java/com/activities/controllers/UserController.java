package com.activities.controllers;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.activities.DTO.AuthRequest;
import com.activities.DTO.FindAllActivityDTO;
import com.activities.DTO.NewUser;
import com.activities.DTO.RolDTO;
import com.activities.DTO.TokenResponse;
import com.activities.DTO.UserGet;
import com.activities.entities.User;
import com.activities.repositories.UserRepo;
import com.activities.services.JwtService;

//import io.swagger.v3.oas.annotations.parameters.RequestBody;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;




@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserRepo userRepo;

	
	@Autowired
    private JwtService jwtService;

	
	@PostMapping("/authenticate")
	public ResponseEntity generateToken(@RequestBody AuthRequest authRequest) {
		Optional<User> u = userRepo.findByUsernameAndPassword(authRequest.getUsername(), authRequest.getPassword());
		if(u.isPresent()) {
			String token = jwtService.generateToken(""+u.get().getId());
			 TokenResponse tokenResponse = new TokenResponse(token);
		     return ResponseEntity.ok(tokenResponse);
		}
		else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		}
		
	}
	
	@PostMapping("/register")
	public ResponseEntity addUser(@RequestBody NewUser userInfo) {
        User u = new User();
		u.setPassword(userInfo.getPassword());
		u.setUsername(userInfo.getUsername());
		u.setName(userInfo.getName());
		u.setSurnames(userInfo.getSurnames());
		u.setGmail(userInfo.getGmail());
		File image = new File("src/main/resources/static/default.jpg");
		try {
			u.setAvatar(Files.readAllBytes(image.toPath()));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		u.setRol("USER");
		userRepo.save(u);
        String token = jwtService.generateToken(""+u.getId());
        TokenResponse tokenResponse = new TokenResponse(token);
        return new ResponseEntity<>(tokenResponse, HttpStatus.OK);
    }
	
	@GetMapping("/get-user/{token}")
	public UserGet getMethodName(@PathVariable(value = "token") String token) {
		System.out.println(jwtService.extractUsername(token));
		User u = userRepo.findById(Long.parseLong(jwtService.extractUsername(token)));
		System.out.println(u);
		UserGet ug = new UserGet();
		ug.setAvatar(u.getAvatar());
		ug.setGmail(u.getGmail());
		ug.setName(u.getName());
		ug.setSurnames(u.getSurnames());
		ug.setUsername(u.getUsername());
		ug.setRol(u.getRol());
		System.out.println(ug);
		return ug;
	}
	
	@PutMapping("edit/{token}")
	public void editUser(@PathVariable(value = "token") String token, @RequestBody UserGet user) {
		
		User u = userRepo.findById(Long.parseLong(jwtService.extractUsername(token)));
		u.setGmail(user.getGmail());
		u.setAvatar(user.getAvatar());
		u.setName(user.getName());
		u.setUsername(user.getUsername());
		u.setSurnames(user.getSurnames());
		userRepo.save(u);
	}
	
	@GetMapping("/getRol/{token}")
	public ResponseEntity getRol(@PathVariable(value = "token") String token){
		User u = userRepo.findById(Long.parseLong(jwtService.extractUsername(token)));
		RolDTO rol = new RolDTO(u.getRol());
		System.out.println(u.getRol());
		return ResponseEntity.ok(rol);
	}
	
}
