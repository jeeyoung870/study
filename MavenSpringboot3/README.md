# MavenSpringboot3
This is a Maven project made as Spring Boot3.0.8 using DB through JPA.
Prod version uses h2, Test version uses MariaDB.
View template engine : Thymeleaf (https://www.thymeleaf.org/)

### Initialize project
Spring Initializr : 
https://start.spring.io/

Dependencies should be added :
webmvc, data jpa, h2, mariadb, thymeleaf, validation, devtools, lombok (only for Dev)

### Version Setting
- When it comes to Spring Boot3(+), the minimum version it can accept is jdk-17.(JUnit5)
- We can set environmental variable for this project which is only valid here.
  (Don't have to change global environmental variable) Do as below.
1. 



### h2 Database
Run Test version project, then you can access h2 DB on browser.
http://localhost:8081/h2-console



### spring boot actuator(monitoring tool)
- when <artifactId>spring-boot-starter-security</artifactId> setted inside of pom.xml, 
  there will be a login page to access http://localhost:8081/ .
- And if the project started, console logs below information : 
  Using generated security password: e2895aec-2176-4e4b-b067-bcf76af5e674

  This generated password is for development use only. Your security configuration must be updated before running your application in production.

- To access http://localhost:8081/ , sign in (Username: user, Password: {upper pw})