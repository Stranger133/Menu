package com.backend.backend.repositories;

import java.util.List;

import com.backend.backend.models.Cart;

public interface CartRepo{
    void addToCart(int id);
    List<Cart> findByUserId(Long userId);
    Cart findByUserIdAndItemId(Long userId, Long itemId); // For Checking if item exist
    void deleteByUserIdAndItemId(Long userId, Long itemId);
}
