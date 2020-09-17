package com.americas.challenge.api.model.entity;

import java.io.Serializable;
import java.util.List;


import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "project")
@EqualsAndHashCode
@ToString
public class ProjectEntity implements Serializable{

    /**
     *
     */
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToMany
    @JoinTable( 
	        name = "project_role", 
	        joinColumns = @JoinColumn(
	          name = "fk_project_id", referencedColumnName = "id"), 
	        inverseJoinColumns = @JoinColumn(
	          name = "fk_role_acess", referencedColumnName = "role_acess")) 
    private List<RoleEntity> roles;

    private String clientName;

}
