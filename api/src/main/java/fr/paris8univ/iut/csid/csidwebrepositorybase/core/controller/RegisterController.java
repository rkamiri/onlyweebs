package fr.paris8univ.iut.csid.csidwebrepositorybase.core.controller;

import fr.paris8univ.iut.csid.csidwebrepositorybase.core.entity.Users;
import fr.paris8univ.iut.csid.csidwebrepositorybase.core.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping(value = "/register")
public class RegisterController {

    public final RegisterService registerService;

    @Autowired
    public RegisterController(RegisterService rs) {
        this.registerService = rs;
    }

    @PostMapping
    public ResponseEntity<Users> createOneRepository(@RequestBody Users user) throws URISyntaxException {
        registerService.createUser(user);
        URI location = new URI("/register/" + user.getFirstname());
        return ResponseEntity.created(location).build();
    }
}
