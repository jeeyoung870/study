package com.basic.mavenSpringboot3.repository;

import com.basic.mavenSpringboot3.entity.Account;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AccountRepositoryTest {

    @Autowired
    AccountRepository accountRepository;

    @Test   // Rollback db datas..
    void account_crud_test() {
        Account account = new Account();
        account.setUsername("testuser2");
        account.setPassword("1234");

        Account savedAccount = accountRepository.save(account);
//        System.out.println("savedAccount.getUsername() = " + savedAccount.getUsername());
        assertEquals("testuser2", savedAccount.getUsername());

        Optional<Account> optional = accountRepository.findByUsername(savedAccount.getUsername());
        if(optional.isPresent()) {
            Account existAccount = optional.get();
            assertEquals("testuser2", savedAccount.getUsername());
        }
    }

    @Test
    void account_notfound() {
        Account account = accountRepository.findByUsername("nothere")     // Optional<null>
                .orElseThrow(() -> new RuntimeException("user not found!!!"));
        assertNotNull(account);
    }
}