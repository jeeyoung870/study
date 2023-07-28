package com.base.myspring;

import com.base.myspring.entity.Account;
import com.base.myspring.repository.AccountRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
class MyspringbootAppApplicationTests {
	@Autowired
	AccountRepository accountRepository;

	@Test
	void save() {
		Account account = new Account();
		account.setUsername("spring");
		account.setPassword("test12");
		accountRepository.save(account);
	}

	@Test
	public void find() {
		Optional<Account> optionalAccount = accountRepository.findByUsername("spring");
		if(optionalAccount.isPresent()) {
			Account account = optionalAccount.get();
			System.out.println("account = " + account);
		}else {
			System.out.println("Account Not Exist");
		}

		Optional<Account> optionalAccount1 = accountRepository.findByUsername("spring33");
		//Supplier인터페이스 T get()
		Account account2 = optionalAccount1.orElseGet(() -> new Account());
		System.out.println("account2 = " + account2);

		Optional<Account> optionalAccount2 = accountRepository.findByUsername("spring44");
		Account account3 = optionalAccount2.orElseThrow(() -> new RuntimeException("Account not exist"));


	}


}
