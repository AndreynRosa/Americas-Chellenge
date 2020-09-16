package com.americas.challenge.api.model.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "role_tbl")
public class RoleEntity {

    @Id
    private String role_acess;

    @ManyToMany
    private List<UserEntity> users;
}
