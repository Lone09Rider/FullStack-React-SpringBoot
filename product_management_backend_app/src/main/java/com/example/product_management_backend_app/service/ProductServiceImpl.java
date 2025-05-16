package com.example.product_management_backend_app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.product_management_backend_app.entities.Product;
import com.example.product_management_backend_app.repositories.ProductRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepo productRepo;

    @Override
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    @Override
    public Product insertProductIntoDatabase(Product product) {
        return productRepo.save(product);
    }

    @Override
    public Product getProductById(int id) {
        return productRepo.findById(id).get();
    }

    @Override
    public Product updateProduct(int id, Product product) {
        Product product2 = productRepo.findById(id).get();
        product2.setName(product.getName());
        product2.setPrice(product.getPrice());
        product2.setQuantity(product.getQuantity());

        Product saveProd = productRepo.save(product2);

        return saveProd;
    }

    @Override
    public void deleteProductById(int id) {
        productRepo.deleteById(id);
    }
    
}
