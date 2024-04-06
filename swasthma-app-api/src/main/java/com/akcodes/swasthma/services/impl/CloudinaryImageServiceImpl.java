package com.akcodes.swasthma.services.impl;

import com.akcodes.swasthma.entities.user.User;
import com.akcodes.swasthma.exceptions.ResourceNotFoundException;
import com.akcodes.swasthma.payloads.user.UserDto;
import com.akcodes.swasthma.repositories.UserRepo;
import com.akcodes.swasthma.services.CloudinaryImageService;
import com.cloudinary.Cloudinary;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class CloudinaryImageServiceImpl implements CloudinaryImageService {

    @Autowired
    private Cloudinary cloudinary;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public UserDto upload(MultipartFile file, Integer userId) {
        try {

            User user = userRepo.findById(userId)
                    .orElseThrow(()-> new ResourceNotFoundException("User", "userId", userId));
            Map data = cloudinary.uploader().upload(file.getBytes(), Map.of());

            String imageUrl = (String) data.get("url");

            user.setProfilePictureUrl(imageUrl);

            userRepo.save(user);

            return modelMapper.map(user, UserDto.class);

        } catch (IOException e) {
            throw new RuntimeException("Image Uploading failed!!!");
        }

    }



}
