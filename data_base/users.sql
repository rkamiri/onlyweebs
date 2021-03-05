create table if not exists users
(
	id int auto_increment
		primary key,
	username varchar(64) not null,
	password varchar(512) not null,
	role int not null,
	constraint users_password_uindex
		unique (password),
	constraint users_username_uindex
		unique (username)
);

