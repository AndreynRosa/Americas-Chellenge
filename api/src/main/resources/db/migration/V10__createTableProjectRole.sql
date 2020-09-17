CREATE TABLE project_role (
  fk_project_id INT NOT NULL,
  fk_role_acess VARCHAR(20) NOT NULL,
  PRIMARY KEY (fk_project_id, fk_role_acess)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
