package com.americas.challenge.api.controller;

import javax.servlet.http.HttpServletRequest;

import com.americas.challenge.api.config.JwtFilter;
import com.americas.challenge.api.service.ProjectServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/project")
@CrossOrigin("*")
public class ProjectController {

    @Autowired
    private ProjectServiceImpl service;

    @Autowired
    private JwtFilter jwtFilter;

    @GetMapping(value = "")
    public ResponseEntity<?> findAllByRoleAthorization(Authentication authentication) {
        return ResponseEntity.ok(service.findAllByRoleAthorization(authentication.getName()));
    }

}
