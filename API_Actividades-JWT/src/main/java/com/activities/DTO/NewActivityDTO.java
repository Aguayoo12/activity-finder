package com.activities.DTO;

import java.util.Arrays;

import org.springframework.web.multipart.MultipartFile;

public class NewActivityDTO {
	 public String city;
	 public String description;
	 public String name;
	 public String time;
	 public String type;
	 public byte[] photo;
	 public String idUser;
	public NewActivityDTO() {
		super();
	}
	
	public NewActivityDTO(String city, String description, String name, String time, String type, byte[] photo,
			String idUser) {
		super();
		this.city = city;
		this.description = description;
		this.name = name;
		this.time = time;
		this.type = type;
		this.photo = photo;
		this.idUser = idUser;
	}

	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getIdUser() {
		return idUser;
	}
	public void setIdUser(String idUser) {
		this.idUser = idUser;
	}
	public byte[] getPhoto() {
		return photo;
	}
	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}
	@Override
	public String toString() {
		return "NewActivityDTO [city=" + city + ", description=" + description + ", name=" + name + ", time=" + time
				+ ", type=" + type + ", photo=" + Arrays.toString(photo) + ", idUser=" + idUser + "]";
	}
	 
	 
	
}
