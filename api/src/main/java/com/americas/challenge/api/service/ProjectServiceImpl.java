package com.americas.challenge.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.americas.challenge.api.model.dto.ProjectRegistrationRequestDTO;
import com.americas.challenge.api.model.dto.ProjectResponseDTO;
import com.americas.challenge.api.model.entity.ProjectEntity;
import com.americas.challenge.api.model.entity.ProjectRegistrationEntity;
import com.americas.challenge.api.model.entity.RoleEntity;
import com.americas.challenge.api.model.entity.UserEntity;
import com.americas.challenge.api.repository.ProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository repository;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private ProjectRegistrationService projectRegistrationService;

    @Override
    public List<ProjectResponseDTO> findAllByRoleAthorization(String emailUser) {
        UserEntity user = userService.findByEmail(emailUser);
        List<RoleEntity> roles = user.getRoles();
        List<ProjectEntity> projects = repository.findAllByRolesIn(roles);
        List<ProjectResponseDTO> reponse = new ArrayList<>();

        projects.stream().forEach(project -> {
            reponse.add(ProjectResponseDTO.builder().projectId(project.getId()).clientName(project.getClientName())
                    .projectRegistratio(projectRegistrationService.findByProject(project)).build());
        });

        return reponse;
    }

    @Override
    public void projectRegisterWork(String emailUser, ProjectRegistrationRequestDTO request) {
        UserEntity user = userService.findByEmail(emailUser);
        ProjectEntity project = findById(request.getProjectId());

        ProjectRegistrationEntity workRegister = ProjectRegistrationEntity.builder().createDate(request.getDate())
                .user(userService.findByEmail(emailUser)).project(findById(request.getProjectId()))
                .checkUserHasHoleAcess(user, project).workedHours(request.getTime()).build();
        projectRegistrationService.save(workRegister);
    }

    @Override
    public ProjectEntity findById(Integer id) {
        Optional<ProjectEntity> opt = repository.findById(id);
        return opt.orElse(null);
    }

}
