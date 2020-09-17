package com.americas.challenge.api.service;

import com.americas.challenge.api.model.entity.UserEntity;

public interface UserService {
    

    UserEntity findByEmail(String email);

    UserEntity save(UserEntity user);
}
