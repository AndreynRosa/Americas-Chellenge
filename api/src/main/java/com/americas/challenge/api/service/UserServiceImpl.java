package com.americas.challenge.api.service;

import com.americas.challenge.api.model.entity.UserEntity;
import com.americas.challenge.api.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Override
    public UserEntity findByEmail(String email) {
      
        return repository.findByEmail(email);
    }

    @Override
    public UserEntity save(UserEntity user) {   
        return repository.save(user);
    }
    
}
