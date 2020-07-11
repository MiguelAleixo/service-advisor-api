create table service (
    id serial,
    id_user serial,
    id_category serial,
    name varchar,
    description varchar,
    constraint pk_id_service primary key (id),
    constraint fk_id_service_user foreign key (id_user) references user(id) constraint fk_id_service_category foreign key (id_category) references category(id)
)



alter table
    service
add
    id_user serial create table category (
        id serial constraint pk_id_category primary key,
        name varchar,
        description varchar
    )