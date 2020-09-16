package com.americas.challenge.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@SpringBootApplication
public class Application {

	public static void main(final String[] args) {
        SpringApplication.run(Application.class, args);
		System.out.println(new BCryptPasswordEncoder().encode("123456789"));
	}

}
