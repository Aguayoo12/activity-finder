package com.activities.DTO;

public class ActivityComment {
	String comment, username, activity;
	long id;

	

	

	public ActivityComment(String comment, String username, String activity, long id) {
		super();
		this.comment = comment;
		this.username = username;
		this.activity = activity;
		this.id = id;
	}

	public ActivityComment() {
		super();
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getActivity() {
		return activity;
	}

	public void setActivity(String activity) {
		this.activity = activity;
	}

	@Override
	public String toString() {
		return "ActivityComment [comment=" + comment + ", username=" + username + ", activity=" + activity + "]";
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
}
