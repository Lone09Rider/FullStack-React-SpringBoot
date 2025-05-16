package com.example.product_management_backend_app.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.product_management_backend_app.entities.Product;
import com.example.product_management_backend_app.service.ProductService;

import lombok.RequiredArgsConstructor;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService service;

    @GetMapping
    private List<Product> getAllProducts(){
        return service.getAllProducts();
    }

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        Product product2 = service.insertProductIntoDatabase(product);

        return ResponseEntity.ok(product2);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Product> getById(@PathVariable int id) {
        Product product2 = service.getProductById(id);

        return ResponseEntity.ok(product2);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable int id, @RequestBody Product product) {
        Product product2 = service.updateProduct(id, product);
        return ResponseEntity.ok(product2);
    }

    @DeleteMapping("/{id}")
    public void deleteMapping(@PathVariable int id){
        service.deleteProductById(id);
    }
}