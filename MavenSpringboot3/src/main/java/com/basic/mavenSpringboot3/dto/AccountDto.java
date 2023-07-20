package com.basic.mavenSpringboot3.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder        // builder()메서드로 간단하게 객체 생성 가능
@Getter @Setter
public class AccountDto {

    private String accountId;

    private double balance;

    private AccountType type;
}
