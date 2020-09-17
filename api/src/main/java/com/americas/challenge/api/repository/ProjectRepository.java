package com.americas.challenge.api.repository;

import java.util.List;

import com.americas.challenge.api.model.entity.ProjectEntity;
import com.americas.challenge.api.model.entity.RoleEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<ProjectEntity, Integer> {

	List<ProjectEntity> findAllByRolesIn(List<RoleEntity> roles);

}
