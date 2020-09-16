package com.americas.challenge.api.service;

import java.util.ArrayList;

import com.americas.challenge.api.model.entity.UserEntity;
import com.americas.challenge.api.model.enums.ErrorEnum;
import com.americas.challenge.api.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository respository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        UserEntity user = respository.findByEmail(email);
            if( user == null ) throw new UsernameNotFoundException(ErrorEnum.USER_NOT_FOUND.toString());
        return new User(user.getEmail(), user.getPss(), new ArrayList<>());
    }

}
