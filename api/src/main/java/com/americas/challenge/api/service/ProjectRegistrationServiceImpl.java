package com.americas.challenge.api.service;

import com.americas.challenge.api.model.entity.ProjectRegistrationEntity;
import com.americas.challenge.api.repository.ProjectRegistrationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectRegistrationServiceImpl implements ProjectRegistrationService {

    @Autowired
    private ProjectRegistrationRepository repository; 

    @Override
    public ProjectRegistrationEntity save(ProjectRegistrationEntity projectRegistrationEntity) {
        return repository.save(projectRegistrationEntity);
    }
    
}
