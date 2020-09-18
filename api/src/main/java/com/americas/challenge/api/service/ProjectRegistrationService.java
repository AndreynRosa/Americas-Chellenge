package com.americas.challenge.api.service;

import java.util.List;

import com.americas.challenge.api.model.entity.ProjectEntity;
import com.americas.challenge.api.model.entity.ProjectRegistrationEntity;

public interface ProjectRegistrationService {
   
    ProjectRegistrationEntity save(ProjectRegistrationEntity projectRegistrationEntity);

	List<ProjectRegistrationEntity> findByProject(ProjectEntity project);
}
