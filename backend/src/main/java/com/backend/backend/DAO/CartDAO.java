package com.backend.backend.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.backend.backend.models.Cart;
import com.backend.backend.repositories.CartRepo;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

public class CartDAO implements CartRepo{

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private CartRepo cartRepository;

    @Transactional
    public void addToCart(Long userId, Long itemId, int quantity) {
        
        // Check if item in the cart
        Cart cartItem = cartRepository.findByUserIdAndItemId(userId, itemId);

        if (cartItem != null) {
            cartItem.setCount(cartItem.getCount() + quantity);
        } else {
            cartItem = new Cart();
            cartItem.setUserId(userId);
            cartItem.setItemId(itemId);
            cartItem.setCount(quantity);
        }
    }

    @Transactional
    public void removeFromCart(Long userId, Long itemId) {
        cartRepository.deleteByUserIdAndItemId(userId, itemId);
    }

    public List<Cart> getCartItems(Long userId) {
        return cartRepository.findByUserId(userId);
    }

    @Override
    public void addToCart(int id) {
        throw new UnsupportedOperationException("Unimplemented method 'addToCart'");
    }

    @Override
    public List<Cart> findByUserId(Long userId) {
        throw new UnsupportedOperationException("Unimplemented method 'findByUserId'");
    }

    @Override
    public Cart findByUserIdAndItemId(Long userId, Long itemId) {
        throw new UnsupportedOperationException("Unimplemented method 'findByUserIdAndItemId'");
    }

    @Override
    public void deleteByUserIdAndItemId(Long userId, Long itemId) {
        throw new UnsupportedOperationException("Unimplemented method 'deleteByUserIdAndItemId'");
    }
    
}
