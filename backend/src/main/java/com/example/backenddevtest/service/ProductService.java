package com.example.backenddevtest.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.example.backenddevtest.model.Product;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class ProductService {

    private static final Logger logger = LoggerFactory.getLogger(ProductService.class);
    private static final String BASE_URL = "http://localhost:3001/product/";

    private final RestTemplate restTemplate;

    private final ObjectMapper objMapper;

    public ProductService(RestTemplate restTemplate, ObjectMapper objMapper) {
        this.restTemplate = restTemplate;
        this.objMapper = objMapper;
    }

    public List<Product> getSimilarProducts(String productId) {
        return getSimilarProductIds(productId).stream()
                .map(this::getProductById)
                .flatMap(Optional::stream)
                .collect(Collectors.toList());
    }

    private List<String> getSimilarProductIds(String productId) {
        String url = BASE_URL + productId + "/similarids";
        try {
            String resp = restTemplate.getForObject(url, String.class);
            return objMapper.readValue(resp, new TypeReference<List<String>>() {
            });
        } catch (Exception e) {
            logger.error("Error fetching similar product IDs for productId {}: {}", productId, e.getMessage());
            return List.of();
        }
    }

    private Optional<Product> getProductById(String productId) {
        String url = BASE_URL + productId;
        try {
            return Optional.ofNullable(restTemplate.getForObject(url, Product.class));
        } catch (Exception e) {
            logger.warn("Product not found for ID {}: {}", productId, e.getMessage());
            return Optional.empty();
        }
    }

}
