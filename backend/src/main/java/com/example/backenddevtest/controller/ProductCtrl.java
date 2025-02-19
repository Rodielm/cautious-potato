package com.example.backenddevtest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.backenddevtest.model.Product;
import com.example.backenddevtest.service.ProductService;

@RestController
public class ProductCtrl {

    @Autowired
    private ProductService productService;

    @GetMapping("/product/{productId}/similar")
    public List<Product> getSimilarProducts(@PathVariable String productId) {
        return productService.getSimilarProducts(productId);
    }
}
