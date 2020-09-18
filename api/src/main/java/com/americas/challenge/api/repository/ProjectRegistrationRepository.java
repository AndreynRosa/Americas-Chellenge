package com.americas.challenge.api.repository;

import java.util.List;

import com.americas.challenge.api.model.entity.ProjectEntity;
import com.americas.challenge.api.model.entity.ProjectRegistrationEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRegistrationRepository extends JpaRepository<ProjectRegistrationEntity, Integer> {

	List<ProjectRegistrationEntity> findAllByProject(ProjectEntity project);
    
}
