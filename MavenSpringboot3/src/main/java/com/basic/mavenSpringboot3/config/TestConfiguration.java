package com.basic.mavenSpringboot3.config;

import com.basic.mavenSpringboot3.dto.AccountDto;
import com.basic.mavenSpringboot3.dto.AccountType;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Profile("test")
@Configuration
public class TestConfiguration {

    @Bean
    public String firstHello() {
        return "hello test!!";
    }

    @Bean
    public AccountDto account() {
        return AccountDto.builder()
                .accountId("9090-9090")
                .balance(2000.0)
                .type(AccountType.CHECKING)
                .build();
    }
}
