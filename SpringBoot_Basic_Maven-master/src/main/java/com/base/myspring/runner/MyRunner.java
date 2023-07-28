package com.base.myspring.runner;

import com.base.myspring.property.MyBootProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
public class MyRunner implements ApplicationRunner{
	private Logger logger = LoggerFactory.getLogger(MyRunner.class);

	@Value("${myboot.name}")
	String name;
	
	@Value("${myboot.age}")
	int age;
	
	//setter injection
	@Autowired
	Environment environment;

	@Autowired
	MyBootProperties myBootProperties;

	@Autowired
	String hello;
	
	@Override
	public void run(ApplicationArguments args) throws Exception {
		System.out.println("Looger 구현객체는?? " + logger.getClass().getName());
		logger.info(">>> Hello Bean : " + hello);
		logger.info("Property Class " + myBootProperties.getFullName());
		logger.info("Properties name = " + name);
		logger.info("Properties age = " + age);
		logger.info("Properties fullName = " + environment.getProperty("myboot.fullName"));
		
		logger.debug("VM arguments : " + args.containsOption("foo"));
		logger.debug("Application arguments : " + args.containsOption("bar"));
		
	}
}
