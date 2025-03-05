package com.backend.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/")
    public String home() {
        return "Welcome to the Home Page";
    }
    
    @GetMapping("/index")
    public String index(){
        return "Home Page";
    }

    @GetMapping("/error")
    public String error(){
        return "Error Page";
    }
}