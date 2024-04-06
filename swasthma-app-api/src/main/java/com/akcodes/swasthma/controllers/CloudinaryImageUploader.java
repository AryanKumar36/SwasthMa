package com.akcodes.swasthma.controllers;


import com.akcodes.swasthma.payloads.user.UserDto;
import com.akcodes.swasthma.services.impl.CloudinaryImageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1")
public class CloudinaryImageUploader {

    @Autowired
    private CloudinaryImageServiceImpl cloudinaryImageService;

    @PostMapping("/upload")
    public ResponseEntity<UserDto> uploadProfilePicture(@RequestParam("file")MultipartFile file, @RequestParam("userId") Integer userId)
    {
        UserDto userDto = cloudinaryImageService.upload(file, userId);
        return ResponseEntity.status(HttpStatus.CREATED).body(userDto);
    }
}
