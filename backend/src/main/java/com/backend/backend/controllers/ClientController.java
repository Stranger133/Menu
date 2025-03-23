package com.backend.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.backend.backend.models.Product;
import com.backend.backend.services.ClientService;

@RestController
public class ClientController {

    private ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService){
        this.clientService = clientService;
    }

    @GetMapping("/products/{type}")
    public List<Product> getProductsByType(@PathVariable int type) {
        return clientService.getProductOfType(type);
    }

    @GetMapping("/products/best-selling")
    public List<Product> getBestSellingProducts() {
        return clientService.getBestSelling();
    }
}
