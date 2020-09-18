package com.americas.challenge.api.ProjectRegistration;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.americas.challenge.api.model.entity.ProjectEntity;
import com.americas.challenge.api.model.entity.ProjectRegistrationEntity;
import com.americas.challenge.api.model.entity.RoleEntity;
import com.americas.challenge.api.model.entity.UserEntity;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class ProjectRegistrationValidationTest {

    @Test
    public void sucessOnCheckHoleAcess() {

        ProjectEntity project = ProjectEntity.builder().clientName("Projeto Cliente A")
                .roles(Stream.of(RoleEntity.builder().role_acess("ADMINISTRADOR").build(),
                        RoleEntity.builder().role_acess("PROGRAMADOR1").build(),
                        RoleEntity.builder().role_acess("PROGRAMADOR2").build()).collect(Collectors.toList()))
                .build();

        UserEntity userAdm = UserEntity.builder().email("adm@adm.com")
                .pss("$aaa")
                .roles(Stream.of(RoleEntity.builder().role_acess("ADMINISTRADOR").build()).collect(Collectors.toList()))
                .build();

        ProjectRegistrationEntity projectRegistration = ProjectRegistrationEntity.builder().user(userAdm)
                .project(project).checkUserHasHoleAcess(userAdm, project).build();

        assertTrue(userAdm.equals(projectRegistration.getUser()));

    }

    @Test
    public void faillOnCheckHoleAcess() {

        ProjectEntity project = ProjectEntity.builder().clientName("Projeto Cliente A")
                .roles(Stream.of(RoleEntity.builder().role_acess("$test").build(),
                        RoleEntity.builder().role_acess("PROGRAMADOR2").build()).collect(Collectors.toList()))
                .build();

        UserEntity userAdm = UserEntity.builder().email("program1@adm.com").pss("$test")
                .roles(Stream.of(RoleEntity.builder().role_acess("PROGAMADOR1").build()).collect(Collectors.toList()))
                .build();
        Assertions.assertThrows(RuntimeException.class, () -> {
            ProjectRegistrationEntity projectRegistration = ProjectRegistrationEntity.builder().user(userAdm)
                    .project(project).checkUserHasHoleAcess(userAdm, project).build();

                 
        });

    }

}
