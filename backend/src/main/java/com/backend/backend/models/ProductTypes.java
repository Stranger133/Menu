package com.backend.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "products_types")
public class ProductTypes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "type", length = 250, nullable = false)
    private String type;

    public ProductTypes() {
    }

    public ProductTypes(String type) {
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}