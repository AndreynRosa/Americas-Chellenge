package com.americas.challenge.api.model.auth;

import lombok.Data;

@Data
public class AuthenticationRequest {
    
    private String password;

    private String email;
}
