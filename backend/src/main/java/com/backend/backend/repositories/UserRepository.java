package com.backend.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.backend.models.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Integer>{
    public UserModel findByEmail(String email);
}
