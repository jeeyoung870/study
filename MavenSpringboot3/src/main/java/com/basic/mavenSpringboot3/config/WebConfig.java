package com.basic.mavenSpringboot3.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // resource/mobile 하위 경로도 classpsth로 추가하기 위한 설정
        registry.addResourceHandler("/mobile/**")
                //반드시 mobile 다음에 / 을 주어야 한다.
                .addResourceLocations("classpath:/mobile/")
                .setCachePeriod(20);//20초
    }

    // CORS 허용을 위한 설정
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:8081")    // or "*"
                .allowedMethods("*");;
    }

}