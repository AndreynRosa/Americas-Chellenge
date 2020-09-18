package com.americas.challenge.api.service;

import java.util.List;

import com.americas.challenge.api.model.dto.ProjectRegistrationRequestDTO;
import com.americas.challenge.api.model.dto.ProjectResponseDTO;
import com.americas.challenge.api.model.entity.ProjectEntity;

public interface ProjectService {

    List<ProjectResponseDTO> findAllByRoleAthorization(String emailUser);

    void projectRegisterWork(String emailUser, ProjectRegistrationRequestDTO request);

    ProjectEntity findById(Integer id);

    ProjectEntity save(ProjectEntity project);

}
