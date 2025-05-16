package com.example.product_management_backend_app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.product_management_backend_app.entities.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {
    
}
