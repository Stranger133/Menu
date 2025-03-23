package com.backend.backend.DAO;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.backend.backend.models.Product;
import com.backend.backend.repositories.ProductRepo;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Repository
public class ProductsDAO implements ProductRepo{

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Product> getProductOfType(int type) {
        String sql = "FROM Product p WHERE p.type = :type";
        TypedQuery<Product> query = entityManager.createQuery(sql, Product.class);
        query.setParameter("type", type);
        return query.getResultList();
    }

    @Override
    public List<Product> getBestSelling() {
        String sql = "FROM Product p WHERE p.bestSelling = 1";
        TypedQuery<Product> query = entityManager.createQuery(sql, Product.class);
        return query.getResultList();
    }
    
}
