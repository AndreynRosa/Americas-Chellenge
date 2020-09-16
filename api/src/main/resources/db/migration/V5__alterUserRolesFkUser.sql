ALTER TABLE
  user_roles add constraint fk_user_tbl_id foreign key(user_tbl_id) references user_tbl (email);

