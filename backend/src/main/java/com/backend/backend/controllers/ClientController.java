package com.backend.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.backend.backend.models.Product;
import com.backend.backend.models.ProductTypes;
import com.backend.backend.repositories.TypesRepo;
import com.backend.backend.services.ClientService;

@RestController
public class ClientController {

    private ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService){
        this.clientService = clientService;
    }

    @Autowired
    private TypesRepo typesRepo;

    @GetMapping("/products/{type}")
    public List<Product> getProductsByType(@PathVariable int type) {
        return clientService.getProductOfType(type);
    }

    @GetMapping("/products/best-selling")
    public List<Product> getBestSellingProducts() {
        return clientService.getBestSelling();
    }

    @GetMapping("/types")
    public List<ProductTypes> getTypes(){
        return typesRepo.findAll();
    }

    @GetMapping("/username")
    public String getUsername() {
        Authentication authentication = (Authentication) SecurityContextHolder.getContext().getAuthentication();
        return authentication.getName();
    }
}
