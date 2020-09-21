package com.americas.challenge.api;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.annotation.PostConstruct;

import com.americas.challenge.api.model.entity.ProjectEntity;
import com.americas.challenge.api.model.entity.RoleEntity;
import com.americas.challenge.api.model.entity.UserEntity;
import com.americas.challenge.api.repository.ProjectRepository;
import com.americas.challenge.api.service.UserServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class Application {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserServiceImpl userService;

    @PostConstruct
    public void initUsers() {
        List<ProjectEntity> allProjects = projectRepository.findAll();

        if (allProjects.size() <= 0) {
            ProjectEntity projectA = ProjectEntity.builder().clientName("Projeto Cliente A")
                    .roles(Stream
                            .of(RoleEntity.builder().role_acess("ADMINISTRADOR").build(),
                                    RoleEntity.builder().role_acess("PROGRAMADOR1").build(),
                                    RoleEntity.builder().role_acess("PROGRAMADOR2").build())
                            .collect(Collectors.toList()))
                    .build();

            ProjectEntity projectB = ProjectEntity.builder().clientName("Projeto Cliente B")
                    .roles(Stream
                            .of(RoleEntity.builder().role_acess("ADMINISTRADOR").build(),
                                    RoleEntity.builder().role_acess("PROGRAMADOR2").build())
                            .collect(Collectors.toList()))
                    .build();

            projectRepository.save(projectA);
            projectRepository.save(projectB);

            UserEntity userAdm = UserEntity.builder().email("adm@adm.com")
                    .pss("$2a$10$tI9GgKjj/KpVACfAIyRSJu/R3NSLxIHqccbVzyYwIAiMA2XTBDjeS").roles(Stream
                            .of(RoleEntity.builder().role_acess("ADMINISTRADOR").build()).collect(Collectors.toList()))
                    .build();
            UserEntity userProgamador1 = UserEntity.builder().email("programado1@pr1.com")
                    .pss("$2a$10$tI9GgKjj/KpVACfAIyRSJu/R3NSLxIHqccbVzyYwIAiMA2XTBDjeS").roles(Stream
                            .of(RoleEntity.builder().role_acess("PROGRAMADOR1").build()).collect(Collectors.toList()))
                    .build();

            UserEntity userProgamador2 = UserEntity.builder().email("programado2@pr.com")
                    .pss("$2a$10$tI9GgKjj/KpVACfAIyRSJu/R3NSLxIHqccbVzyYwIAiMA2XTBDjeS").roles(Stream
                            .of(RoleEntity.builder().role_acess("PROGRAMADOR2").build()).collect(Collectors.toList()))
                    .build();

            userService.save(userAdm);
            userService.save(userProgamador1);
            userService.save(userProgamador2);

        }

    }

    public static void main(final String[] args) {
        SpringApplication.run(Application.class, args);
        System.out.println(new BCryptPasswordEncoder().encode("123456789"));

    }

}
