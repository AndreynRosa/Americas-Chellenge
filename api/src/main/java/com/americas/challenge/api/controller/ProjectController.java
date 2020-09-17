package com.americas.challenge.api.controller;

import com.americas.challenge.api.service.ProjectServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @GetMapping(value = "/{email}")
    public ResponseEntity<?> findAllByRoleAthorization(@PathVariable String email) {
        return ResponseEntity.ok().body(service.findAllByRoleAthorization(email));
    }

}
