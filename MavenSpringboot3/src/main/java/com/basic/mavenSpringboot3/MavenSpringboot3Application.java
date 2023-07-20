package com.basic.mavenSpringboot3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
// == @SpringBootConfiguration + @EnableAutoConfiguration + @ComponentScan
public class MavenSpringboot3Application {

	public static void main(String[] args) {
//		SpringApplication.run(MavenSpringboot0720Application.class, args);
		// context:component-scan 대상 컴포넌트로 만드려면 base package(com/basic/mavenSpringboot3) 하위에 생성해야 한다.

		SpringApplication application = new SpringApplication(MavenSpringboot3Application.class);
		application.setWebApplicationType(WebApplicationType.SERVLET); 	//웹어플리케이션 타입 지정(NONE, SERVLET, REACTIVE)
		application.run(args);
	}


}
