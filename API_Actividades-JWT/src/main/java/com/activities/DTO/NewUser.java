package com.activities.DTO;

import java.util.Arrays;

public class NewUser {

	String username, name, surnames, gmail, password;
	byte[] avatar;

	public NewUser(String username, String name, String surnames, String gmail, String password, byte[] avatar) {
		super();
		this.username = username;
		this.name = name;
		this.surnames = surnames;
		this.gmail = gmail;
		this.password = password;
		this.avatar = avatar;
	}

	public NewUser() {
		super();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurnames() {
		return surnames;
	}

	public void setSurnames(String surnames) {
		this.surnames = surnames;
	}

	public String getGmail() {
		return gmail;
	}

	public void setGmail(String gmail) {
		this.gmail = gmail;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public byte[] getAvatar() {
		return avatar;
	}

	public void setAvatar(byte[] avatar) {
		this.avatar = avatar;
	}

	@Override
	public String toString() {
		return "NewUser [username=" + username + ", name=" + name + ", surnames=" + surnames + ", gmail=" + gmail
				+ ", password=" + password + ", avatar=" + Arrays.toString(avatar) + "]";
	}
	
	
}
