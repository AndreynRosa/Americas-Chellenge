package com.americas.challenge.api.service;

import java.util.List;

import com.americas.challenge.api.model.entity.ProjectEntity;
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

    @Override
    public List<ProjectEntity> findAllByRoleAthorization(String email) {
        UserEntity user = userService.findByEmail(email);
        List<RoleEntity> roles = user.getRoles();
        List<ProjectEntity> projects = repository.findAllByRolesIn(roles);

        return projects;
    }

}
