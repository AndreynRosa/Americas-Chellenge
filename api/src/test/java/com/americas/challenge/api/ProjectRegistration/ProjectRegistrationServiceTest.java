package com.americas.challenge.api.ProjectRegistration;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.americas.challenge.api.model.entity.ProjectEntity;
import com.americas.challenge.api.model.entity.ProjectRegistrationEntity;
import com.americas.challenge.api.model.entity.RoleEntity;
import com.americas.challenge.api.model.entity.UserEntity;
import com.americas.challenge.api.repository.ProjectRegistrationRepository;
import com.americas.challenge.api.repository.ProjectRepository;
import com.americas.challenge.api.repository.UserRepository;
import com.americas.challenge.api.service.ProjectRegistrationServiceImpl;
import com.americas.challenge.api.service.ProjectServiceImpl;
import com.americas.challenge.api.service.UserServiceImpl;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.internal.configuration.injection.MockInjection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;


public class ProjectRegistrationServiceTest {

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
        projectRegistarService = Mockito.mock(ProjectRegistrationServiceImpl.class);
        userService = Mockito.mock(UserServiceImpl.class);
        projectService = Mockito.mock(ProjectServiceImpl.class);
        projectRegistarService = Mockito.mock(ProjectRegistrationServiceImpl.class);

    }

    @InjectMocks
    private ProjectRegistrationServiceImpl projectRegistarService;
    @MockBean
    private ProjectRegistrationRepository projectRegistarRepository;

    @InjectMocks
    private UserServiceImpl userService;
    @MockBean
    private UserRepository userRepository;

    @InjectMocks
    private ProjectServiceImpl projectService;
    @MockBean
    private ProjectRepository projectRepository;

    @Test
    public void saveRegister() {

        ProjectEntity project = ProjectEntity.builder().clientName("Projeto Cliente A Test")
                .roles(Stream.of(RoleEntity.builder().role_acess("ADMINISTRADOR").build(),
                        RoleEntity.builder().role_acess("PROGRAMADOR1").build()).collect(Collectors.toList()))
                .build();

        UserEntity userAdm = UserEntity.builder().email("user@test.com").pss("$aaa")
                .roles(Stream.of(RoleEntity.builder().role_acess("PROGRAMADOR1").build()).collect(Collectors.toList()))
                .build();
        userService.save(userAdm);
        projectService.save(project);

        ProjectRegistrationEntity projecrRegister = ProjectRegistrationEntity.builder().user(userAdm).project(project)
                .checkUserHasHoleAcess(userAdm, project).build();
        projectRegistarService.save(projecrRegister);
        assertNotNull(projecrRegister);
    }
}
