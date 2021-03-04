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
    id       int auto_increment
        primary key,
    username varchar(64)  not null,
    password varchar(512) not null,
    role     int          not null,
    constraint users_password_uindex
        unique (password),
    constraint users_username_uindex
        unique (username)
);

insert into anime values (default, '一つなぎ', 'One Piece',
                            'The story follows the adventures of Monkey D. Luffy,
                            a boy whose body gained the properties of rubber after unintentionally
                            eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates,
                            Luffy explores the Grand Line in search of the world''s ultimate treasure known
                            as "One Piece" in order to become the next King of the Pirates.', '/home/nlmz/Pictures/one_piece.jpg', 1);