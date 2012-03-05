create database media_db;

use media_db;

CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50),
	facebook_id INT(11),
	created DATETIME DEFAULT NULL,
 	modified DATETIME DEFAULT NULL 
);

CREATE TABLE groups(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user_id INT,
	host_id INT,
	name VARCHAR(200),
	description VARCHAR(150),
	FOREIGN KEY(user_id) REFERENCES users(id),
	created DATETIME DEFAULT NULL,
	modified DATETIME DEFAULT NULL	
);

CREATE TABLE sessions(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	group_id INT,
	name VARCHAR(200),
	description VARCHAR(300),
	status VARCHAR(50),
	history_id INT,
	FOREIGN KEY(group_id) REFERENCES groups(id),
	created DATETIME DEFAULT NULL,
	modified DATETIME DEFAULT NULL
);

CREATE TABLE histories(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	session_id INT,
	song_url VARCHAR(300),
	song_title VARCHAR(100),
	song_artist VARCHAR(100),
	votes INT,
	winner BOOLEAN,
	FOREIGN KEY(session_id) REFERENCES sessions(id),
	created DATETIME DEFAULT NULL,
	modified DATETIME DEFAULT NULL
);