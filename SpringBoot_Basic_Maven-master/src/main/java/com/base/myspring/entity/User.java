package com.base.myspring.entity;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @NotBlank(message = "이름은 꼭 입력해요!!")
    private String name;

    @Column(unique=true)
    @NotBlank(message = "이메일주소도 꼭 입력해요!!")
    private String email;

}