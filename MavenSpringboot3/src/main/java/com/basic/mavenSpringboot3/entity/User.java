package com.basic.mavenSpringboot3.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="users")
@Getter @Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotEmpty(message = "Name is mandatory")    // 공백은 통과함.
    @Column(nullable = false)
    private String name;
    @NotBlank(message = "Email is mandatory")  // @NotEmpty + trim (공백 통과X)
    @Column(unique = true, nullable = false)
    private String email;
}
