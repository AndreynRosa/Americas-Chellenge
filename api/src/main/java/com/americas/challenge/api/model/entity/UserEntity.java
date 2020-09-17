package com.americas.challenge.api.model.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "user_tbl")
public class UserEntity implements Serializable{

    /**
     *
     */
    private static final long serialVersionUID = 1L;

 

    @Id
    private String email;

    private String pss;

    @ManyToMany
    @JoinTable( 
	        name = "user_role", 
	        joinColumns = @JoinColumn(
	          name = "fk_user_email", referencedColumnName = "email"), 
	        inverseJoinColumns = @JoinColumn(
	          name = "fk_role_acess", referencedColumnName = "role_acess")) 
    private List<RoleEntity> roles;
}
