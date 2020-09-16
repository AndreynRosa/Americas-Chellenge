
CREATE TABLE user_roles (
  user_tbl_id VARCHAR(20)  NOT NULL,
  role_id VARCHAR(20)  NOT NULL,
  PRIMARY KEY (user_tbl_id, role_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;


