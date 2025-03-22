package com.backend.backend.DAO;

import java.util.List;

import com.backend.backend.models.Product;
import com.backend.backend.repositories.ProductRepo;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;

public class ProductsDAO implements ProductRepo{

    private EntityManager entityManager;

    @Override
    public List<Product> getProductOfType(int type) {
        String sql = "SELECT * FROM Products p WHERE p.type = :type";
        TypedQuery<Product> query = entityManager.createQuery(sql, Product.class);
        query.setParameter("type", type);
        return query.getResultList();
    }

    @Override
    public List<Product> getBestSelling() {
        String jpql = "SELECT p FROM Product p WHERE p.bestSelling = 1";
        TypedQuery<Product> query = entityManager.createQuery(jpql, Product.class);
        return query.getResultList();
    }
    
}
