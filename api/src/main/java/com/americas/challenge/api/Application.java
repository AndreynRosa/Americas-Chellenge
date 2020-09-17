package com.americas.challenge.api;


import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.annotation.PostConstruct;

import com.americas.challenge.api.model.entity.ProjectEntity;
import com.americas.challenge.api.model.entity.RoleEntity;
import com.americas.challenge.api.repository.ProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class Application {

    @Autowired
    private ProjectRepository projectRepository;

    @PostConstruct
    public void initUsers() {
        ProjectEntity projectA = ProjectEntity.builder().clientName("Projeto Cliente A")
                .roles(Stream.of(RoleEntity.builder().role_acess("ADMINISTRADOR").build(),
                        RoleEntity.builder().role_acess("PROGRAMADOR1").build(),
                        RoleEntity.builder().role_acess("PROGRAMADOR2").build()).collect(Collectors.toList()))
                .build();

        projectRepository.save(projectA);
    }

    public static void main(final String[] args) {
        SpringApplication.run(Application.class, args);
        System.out.println(new BCryptPasswordEncoder().encode("123456789"));

    }

}
