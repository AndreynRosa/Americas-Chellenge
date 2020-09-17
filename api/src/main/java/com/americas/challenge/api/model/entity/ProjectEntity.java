package com.americas.challenge.api.model.entity;

import java.io.Serializable;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "project")
@Data
public class ProjectEntity implements Serializable{

    /**
     *
     */
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String clientName;

}
