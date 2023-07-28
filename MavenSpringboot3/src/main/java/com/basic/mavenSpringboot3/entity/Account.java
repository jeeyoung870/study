package com.basic.mavenSpringboot3.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Account {

    // entity 작성해준 것만으로 테이블 자동 생성된다.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(unique=true, nullable = false)
    private String username;
    @Column(nullable = false)
    private String password;

}
