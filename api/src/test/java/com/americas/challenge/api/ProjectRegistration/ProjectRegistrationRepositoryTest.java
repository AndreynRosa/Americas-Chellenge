package com.americas.challenge.api.ProjectRegistration;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.americas.challenge.api.model.entity.ProjectEntity;
import com.americas.challenge.api.model.entity.ProjectRegistrationEntity;
import com.americas.challenge.api.model.entity.RoleEntity;
import com.americas.challenge.api.model.entity.UserEntity;
import com.americas.challenge.api.repository.ProjectRegistrationRepository;

import org.junit.jupiter.api.Assertions;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

public class ProjectRegistrationRepositoryTest {

    @Autowired
    private ProjectRegistrationRepository repository;

    // @Autowired
    // private UserServiceImpl usserService;


    @Test
    public void save() {
        final ProjectEntity project = ProjectEntity.builder().clientName("Projeto Cliente A Test")
                .roles(Stream.of(RoleEntity.builder().role_acess("ADMINISTRADOR").build(),
                        RoleEntity.builder().role_acess("PROGRAMADOR1").build()).collect(Collectors.toList()))
                .build();

        final UserEntity userAdm = UserEntity.builder().email("user@test.com").pss("$aaa")
                .roles(Stream.of(RoleEntity.builder().role_acess("PROGRAMADOR1").build()).collect(Collectors.toList()))
                .build();

        final ProjectRegistrationEntity projecrRegister = ProjectRegistrationEntity.builder().user(userAdm).project(project)
                .checkUserHasHoleAcess(userAdm, project).build();
        final ProjectRegistrationEntity projectRegistration = repository.save(projecrRegister);

        Assertions.assertNotNull(projectRegistration);
    }

}
