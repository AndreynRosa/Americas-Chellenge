CREATE TABLE user_role (
  fk_user_email VARCHAR(20) NOT NULL,
  fk_role_acess VARCHAR(20) NOT NULL,
  PRIMARY KEY (fk_user_email, fk_role_acess)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
