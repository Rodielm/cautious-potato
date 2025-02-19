package com.example.backenddevtest.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backenddevtest.model.Product;
import com.example.backenddevtest.service.ProductService;

@RestController
@RequestMapping("/product")
public class ProductCtrl {

    private final ProductService productService;

    public ProductCtrl(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/{productId}/similar")
    public ResponseEntity<List<Product>> getSimilarProducts(@PathVariable String productId) {
        List<Product> similarProducts = productService.getSimilarProducts(productId);
        return similarProducts.isEmpty()
                ? ResponseEntity.notFound().build()
                : ResponseEntity.ok(similarProducts);
    }
}
