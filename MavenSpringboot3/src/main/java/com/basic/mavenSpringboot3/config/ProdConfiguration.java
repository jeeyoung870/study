package com.basic.mavenSpringboot3.config;

import com.basic.mavenSpringboot3.dto.AccountDto;
import com.basic.mavenSpringboot3.dto.AccountType;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

// @Profile을 통해 런타임 환경 조성 가능 ( application.properties의 spring.profiles.active=prod )
// ProdConfiguration과 TestConfigurationdp 같은이름의 method가 있지만 실행시 ProdConfiguration의 method사용
// @Profile을 설정하지 않으면 Test와 Prod 각각 bean name 중복으로 에러 발생한다.
@Profile("prod")
@Configuration
public class ProdConfiguration {

    @Bean
    public String firstHello() {
        return "hello prod!!!";
    }

    @Bean
    public AccountDto account() {
        return AccountDto.builder()
                .accountId("1234-5678")
                .balance(10000.0)
                .type(AccountType.SAVING)
                .build();
    }

}
