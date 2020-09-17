package com.americas.challenge.api.service;

import java.util.List;

import com.americas.challenge.api.model.dto.projectRegisterWorkRequestDTO;
import com.americas.challenge.api.model.entity.ProjectEntity;

public interface ProjectService {

    List<ProjectEntity> findAllByRoleAthorization(String emailUser);

    void projectRegisterWork(String emailUser, projectRegisterWorkRequestDTO request);

    ProjectEntity findById(Integer id);
}
