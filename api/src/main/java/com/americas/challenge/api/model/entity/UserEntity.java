package com.americas.challenge.api.model.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
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
	        name = "user_roles", 
	        joinColumns = @JoinColumn(
	          name = "user_tbl_id", referencedColumnName = "email"), 
	        inverseJoinColumns = @JoinColumn(
	          name = "role_id", referencedColumnName = "role_acess")) 
    private List<RoleEntity> roles;
}
