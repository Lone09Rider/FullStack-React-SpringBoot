package com.example.product_management_backend_app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.product_management_backend_app.entities.Product;

@Service
public interface ProductService {
    List<Product> getAllProducts();
    public Product insertProductIntoDatabase(Product product);
    public Product getProductById(int id);
    public Product updateProduct(int id, Product product);
    public void deleteProductById(int id);
}
