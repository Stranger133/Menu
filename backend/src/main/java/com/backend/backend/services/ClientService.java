package com.backend.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.backend.backend.DAO.ProductsDAO;
import com.backend.backend.models.Product;

@Service
public class ClientService {

    ProductsDAO productDao;

    public List<Product> getProductOfType(int type){
        return getProductOfType(type);
    }
    
    public List<Product> getBestSelling(){
        return productDao.getBestSelling();
    }
}