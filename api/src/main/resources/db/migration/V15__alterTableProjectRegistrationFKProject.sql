ALTER TABLE
  project_registration
add
  constraint fk_project_registration_project_id foreign key(fk_project_id) references project (id);
