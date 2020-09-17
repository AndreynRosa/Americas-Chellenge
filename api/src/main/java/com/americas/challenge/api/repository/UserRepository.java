package com.americas.challenge.api.repository;




import com.americas.challenge.api.model.entity.UserEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, String> {

	UserEntity findByEmail(String email);
    
}
