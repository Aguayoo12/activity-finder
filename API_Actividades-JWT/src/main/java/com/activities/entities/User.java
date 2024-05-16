package com.activities.entities;

import java.io.Serializable;
import java.util.Arrays;

import jakarta.persistence.*;


/**
 * The persistent class for the users database table.
 * 
 */
@Entity
@Table(name="users")
@NamedQuery(name="User.findAll", query="SELECT u FROM User u")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private long id;

	@Lob
	private byte[] avatar;

	private String gmail;

	private String name;

	private String password;

	private String rol;

	private String surnames;

	private String username;

	public User() {
	}

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public byte[] getAvatar() {
		return this.avatar;
	}

	public void setAvatar(byte[] avatar) {
		this.avatar = avatar;
	}

	public String getGmail() {
		return this.gmail;
	}

	public void setGmail(String gmail) {
		this.gmail = gmail;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRol() {
		return this.rol;
	}

	public void setRol(String rol) {
		this.rol = rol;
	}

	public String getSurnames() {
		return this.surnames;
	}

	public void setSurnames(String surnames) {
		this.surnames = surnames;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", avatar=" + Arrays.toString(avatar) + ", gmail=" + gmail + ", name=" + name
				+ ", password=" + password + ", rol=" + rol + ", surnames=" + surnames + ", username=" + username + "]";
	}

}