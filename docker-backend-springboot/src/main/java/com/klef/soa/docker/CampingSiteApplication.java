package com.klef.soa.docker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CampingSiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(CampingSiteApplication.class, args);
		System.out.println("Camping Site Application Running Successfully");
	}

}
