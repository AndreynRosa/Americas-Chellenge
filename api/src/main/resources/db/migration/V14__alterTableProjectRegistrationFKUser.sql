ALTER TABLE
  project_registration
add
  constraint fk_project_registration_user_email foreign key(fk_user_email) references user_tbl (email);
