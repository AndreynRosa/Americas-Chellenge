ALTER TABLE
  project_role
add
  constraint fk_project_role_project_id foreign key(fk_project_id) references project (id);
