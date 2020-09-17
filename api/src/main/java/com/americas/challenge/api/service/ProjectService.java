package com.americas.challenge.api.service;

import java.util.List;

import com.americas.challenge.api.model.entity.ProjectEntity;

public interface ProjectService {

   List<ProjectEntity>  findAllByRoleAthorization(String emai);
    
}
