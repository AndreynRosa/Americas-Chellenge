package com.americas.challenge.api.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class UserEntity {
     
    @Id
    private Integer id;

    private String email;
    
    private String password;
}
