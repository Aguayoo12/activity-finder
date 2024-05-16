package com.activities.DTO;

import java.util.Arrays;

public class FindAllActivityDTO {
	public long id;
	public String name, description, type, time, city, username;
	public byte[] photo, avatar;
	public float valoraciones;
	
	public FindAllActivityDTO(String name, String description, String type, String time, String city, byte[] photo,
			String username, byte[] avatar, float valoraciones, long id) {
		super();
		this.name = name;
		this.description = description;
		this.type = type;
		this.time = time;
		this.city = city;
		this.photo = photo;
		this.username = username;
		this.avatar = avatar;
		this.valoraciones = valoraciones;
		this.id = id;	}
	public FindAllActivityDTO() {
		super();
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public byte[] getPhoto() {
		return photo;
	}
	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}
	public float getValoraciones() {
		return valoraciones;
	}
	public void setValoraciones(float valoraciones) {
		this.valoraciones = valoraciones;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public byte[] getAvatar() {
		return avatar;
	}
	public void setAvatar(byte[] avatar) {
		this.avatar = avatar;
	}
	@Override
	public String toString() {
		return "FindAllActivityDTO [name=" + name + ", description=" + description + ", type=" + type + ", time=" + time
				+ ", city=" + city + ", username=" + username + ", photo=" + Arrays.toString(photo) + ", avatar="
				+ Arrays.toString(avatar) + ", valoraciones=" + valoraciones + "]";
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	
	
}
