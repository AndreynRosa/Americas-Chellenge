package com.americas.challenge.api.model.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "role_tbl")
public class RoleEntity {

    @Id
    private String role_acess;

    // @ManyToMany(fetch = FetchType.EAGER)
    // @Column()
    // private List<UserEntity> users;
}
