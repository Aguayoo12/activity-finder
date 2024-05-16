package com.activities.DTO;

public class AddActivityDTO {

	String city, description, name, time, type, idUser;

	public AddActivityDTO() {
		super();
	}

	public AddActivityDTO(String city, String description, String name, String time, String type, String idUser) {
		super();
		this.city = city;
		this.description = description;
		this.name = name;
		this.time = time;
		this.type = type;
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

	@Override
	public String toString() {
		return "AddActivityDTO [city=" + city + ", description=" + description + ", name=" + name + ", time=" + time
				+ ", type=" + type + ", idUser=" + idUser + "]";
	}
}
