package com.americas.challenge.api.controller;


import com.americas.challenge.api.model.dto.projectRegisterWorkRequestDTO;
import com.americas.challenge.api.service.ProjectServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/project")
@CrossOrigin("*")
public class ProjectController {

    @Autowired
    private ProjectServiceImpl service;

    @GetMapping(value = "")
    @ApiOperation(value = "Returns projects for which the user informed via jwt is authorized.")
    public ResponseEntity<?> findAllByRoleAthorization(Authentication authentication) {
        return ResponseEntity.ok(service.findAllByRoleAthorization(authentication.getName()));
    }

    @PostMapping(value = "/register")
    @ApiOperation(value = "The user informed in the jwt creates work record in the pointed project")
    public ResponseEntity<?> projectRegisterWork(@RequestBody projectRegisterWorkRequestDTO request,
            Authentication authentication) {
        try {
            service.projectRegisterWork(authentication.getName(), request);
        } catch (Exception e) {
            return (ResponseEntity<?>) ResponseEntity.badRequest();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body("Create register on Project");
    }

}
