create table if not exists Anime
(
	id int auto_increment
		primary key,
	title varchar(64) not null,
	international_title varchar(64) null,
	synopsis varchar(512) not null,
	cover varchar(64) null,
	ranking int not null
);

