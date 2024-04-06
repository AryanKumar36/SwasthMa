package com.akcodes.swasthma.config;


import com.cloudinary.Cloudinary;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class ProjectConfig {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Bean
    public Cloudinary getCloudinary(){
        Map config = new HashMap<>();
        config.put("cloud_name", "dt8ezbt3o");
        config.put("api_key", "827759268943644");
        config.put("api_secret", "V8qeaCNIsfBLLZzve6gQUxADnHk");
        config.put("secure", true);

        return new Cloudinary(config);


    }
}
