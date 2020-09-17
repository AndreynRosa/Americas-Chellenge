CREATE TABLE project_registration (
  id INT NOT NULL AUTO_INCREMENT,
  fk_project_id INT NOT NULL,
  fk_user_email VARCHAR(20) NOT NULL,
  worked_hours FLOAT,
  create_date DATE NOT NULL,
  PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
