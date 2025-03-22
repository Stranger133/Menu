package com.backend.backend.repositories;

import java.util.List;

import com.backend.backend.models.Product;

public interface ProductRepo{
    List<Product> getProductOfType(int type);
    List<Product> getBestSelling();
}