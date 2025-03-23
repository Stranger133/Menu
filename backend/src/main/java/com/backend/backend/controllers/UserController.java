package com.backend.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.backend.backend.models.RegisterModel;
import com.backend.backend.models.UserModel;
import com.backend.backend.repositories.UserRepository;

import jakarta.validation.Valid;

@Controller
public class UserController {
    @Autowired
    private UserRepository repository;

    @GetMapping("/register")
    public String register(Model model){
        RegisterModel registerModel = new RegisterModel();
        model.addAttribute(registerModel);
        model.addAttribute("success", false);
        return "register1";
    }

    @PostMapping("/register")
    public String register(Model model, @Valid @ModelAttribute RegisterModel registerModel, BindingResult result){
        if(!registerModel.getPassword().equals(registerModel.getConfirmPassword())){
            result.addError(
                new FieldError("registerModel", "confirmPassword", "Password must Match")
            );
        }
        UserModel user = repository.findByEmail(registerModel.getEmail());
        if(user != null){
            result.addError(
                new FieldError("registerModel", "email", "Email address already exist")
            );
        }
        if(result.hasErrors()){
            return "register1";
        }
        try {
            UserModel newuser = new UserModel();
            newuser.setUsername(registerModel.getUsername());
            newuser.setEmail(registerModel.getEmail());
            newuser.setPassword((new BCryptPasswordEncoder()).encode(registerModel.getPassword()));

            repository.save(newuser);
            model.addAttribute("registerModel", new RegisterModel());
            model.addAttribute("success", true);
        } catch (Exception e) {
            result.addError(
                new FieldError("registerModel", "username", e.getMessage())
            );
        }
        return "";
    }
    
    @GetMapping("/home")
    public String home() {
        return "home";
    }
}
