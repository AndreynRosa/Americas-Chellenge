package com.americas.challenge.api.model.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


import lombok.Data;

@Entity
@Data
@Table(name = "user_tbl")
public class UserEntity {

    @Id
    private Integer id;

    private String email;

    private String pss;
}
