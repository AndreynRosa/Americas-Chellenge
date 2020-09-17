package com.americas.challenge.api.service;

import java.util.List;
import java.util.Optional;

import com.americas.challenge.api.model.dto.projectRegisterWorkRequestDTO;
import com.americas.challenge.api.model.entity.ProjectEntity;
import com.americas.challenge.api.model.entity.RoleEntity;
import com.americas.challenge.api.model.entity.UserEntity;
import com.americas.challenge.api.model.enums.ErrorEnum;
import com.americas.challenge.api.repository.ProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import io.jsonwebtoken.PrematureJwtException;

@Service
public class ProjectServiceImpl implements ProjectService {
    @Autowired
    private ProjectRepository repository;

    @Autowired
    private UserServiceImpl userService;

    @Override
    public List<ProjectEntity> findAllByRoleAthorization(String emailUser) {
        UserEntity user = userService.findByEmail(emailUser);
        List<RoleEntity> roles = user.getRoles();
        List<ProjectEntity> projects = repository.findAllByRolesIn(roles);
        return projects;
    }

    @Override
    public void projectRegisterWork(String emailUser, projectRegisterWorkRequestDTO request) {
        UserEntity user = userService.findByEmail(emailUser);
        ProjectEntity project = findById(request.getProjectId());
        boolean isAuthorization = checkUserHasHoleAcess(project.getRoles(), user.getRoles());
        Assert.isTrue(isAuthorization, ErrorEnum.USERT_NOT_AUTHORIZED.toString());

    }

    private boolean checkUserHasHoleAcess(List<RoleEntity> projectRoles, List<RoleEntity> userRoles) {
        return projectRoles.stream().anyMatch(projectRole -> {
            return userRoles.contains(projectRole);
        });
    }

    @Override
    public ProjectEntity findById(Integer id) {
        Optional<ProjectEntity> opt = repository.findById(id);
        return opt.orElse(null);
    }

}
