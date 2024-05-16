package com.activities.DTO;

import java.util.Arrays;

import jakarta.persistence.Lob;

public class UserGet {

	private byte[] avatar;

	private String gmail;

	private String name;

	private String rol;

	private String surnames;

	private String username;

	public UserGet(byte[] avatar, String gmail, String name, String rol, String surnames, String username) {
		super();
		this.avatar = avatar;
		this.gmail = gmail;
		this.name = name;
		this.rol = rol;
		this.surnames = surnames;
		this.username = username;
	}

	public UserGet() {
		super();
	}

	public byte[] getAvatar() {
		return avatar;
	}

	public void setAvatar(byte[] avatar) {
		this.avatar = avatar;
	}

	public String getGmail() {
		return gmail;
	}

	public void setGmail(String gmail) {
		this.gmail = gmail;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRol() {
		return rol;
	}

	public void setRol(String rol) {
		this.rol = rol;
	}

	public String getSurnames() {
		return surnames;
	}

	public void setSurnames(String surnames) {
		this.surnames = surnames;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "UserGet [avatar="  + ", gmail=" + gmail + ", name=" + name + ", rol=" + rol
				+ ", surnames=" + surnames + ", username=" + username + "]";
	}
	
	
}
