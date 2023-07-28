package com.base.myspring;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MyspringbootAppApplication {

	public static void main(String[] args) {
//		SpringApplication.run(MyspringbootAppApplication.class, args);
		SpringApplication application = new SpringApplication(MyspringbootAppApplication.class);
		application.setWebApplicationType(WebApplicationType.SERVLET); 
		application.run(args);

	}

	@Bean
	public ModelMapper modelMapper() {
		ModelMapper modelMapper = new ModelMapper();
		return modelMapper;
	}
	
}
