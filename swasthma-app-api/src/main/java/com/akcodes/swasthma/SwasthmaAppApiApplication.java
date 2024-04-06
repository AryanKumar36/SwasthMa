package com.akcodes.swasthma;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SwasthmaAppApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(SwasthmaAppApiApplication.class, args);
	}


}
