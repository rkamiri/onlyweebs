create table if not exists anime
(
    id                  int auto_increment
        primary key,
    title               varchar(64)  not null,
    international_title varchar(64)  null,
    synopsis            varchar(512) not null,
    cover               varchar(64)  null,
    ranking             int          not null
);

create table if not exists users
(
    id        int auto_increment
        primary key,
    username  varchar(64)          not null,
    password  varchar(512)         not null,
    enabled   tinyint(1) default 1 null,
    firstname varchar(64)          not null,
    lastname  varchar(64)          not null,
    email     varchar(64)          not null,
    gender    varchar(1)           null,
    constraint users_username_uindex
        unique (username)
);

create table if not exists authorities
(
    username  varchar(50) not null
        primary key,
    authority varchar(50) not null,
    constraint authorities_users_username_fk
        foreign key (username) references users (username)
);

insert into anime values (default, '一つなぎ', 'One Piece',
                            'The story follows the adventures of Monkey D. Luffy,
                            a boy whose body gained the properties of rubber after unintentionally
                            eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates,
                            Luffy explores the Grand Line in search of the world''s ultimate treasure known
                            as "One Piece" in order to become the next King of the Pirates.', '/home/nlmz/Pictures/one_piece.jpg', 1);

insert into users values (default, 'aziz', '$2y$12$yNOusS/wfuzFOg2lkj1H6e9sbD3ve57zSD7ouGDWBnA8UKc9bgiEO', 1, 'firstname', 'lastname', 'email', 'M');

insert into authorities values ('aziz', 'root');