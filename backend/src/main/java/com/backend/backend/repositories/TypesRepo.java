package com.backend.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.backend.models.ProductTypes;

public interface TypesRepo extends JpaRepository<ProductTypes, Integer>{
    public List<ProductTypes> findAll();
}
