package com.americas.challenge.api.controller;

import com.americas.challenge.api.model.auth.AuthenticationRequest;
import com.americas.challenge.api.model.auth.AuthenticationResponse;
import com.americas.challenge.api.service.UserDetailsServiceImpl;
import com.americas.challenge.api.util.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/authenticate")
@CrossOrigin(origins = "*")
@Api(value = "Porject API REST")
public class AuthenticateController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping(value = "")
    @ApiOperation( value = "Athenticate the user and returns jwt.")
    public ResponseEntity<AuthenticationResponse> createAuthenticationToken(@RequestBody AuthenticationRequest request)
            throws Exception {
        try {
            authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect email or password", e);
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
        final String jwt = jwtUtil.generateToken(userDetails.getUsername());
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

}
