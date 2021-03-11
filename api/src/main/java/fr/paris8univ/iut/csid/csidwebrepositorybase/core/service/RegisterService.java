package fr.paris8univ.iut.csid.csidwebrepositorybase.core.service;

import fr.paris8univ.iut.csid.csidwebrepositorybase.core.entity.Users;
import fr.paris8univ.iut.csid.csidwebrepositorybase.core.repository.RegisterRepository;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {
    private final RegisterRepository registerRepository;

    public RegisterService(RegisterRepository registerRepository) {
        this.registerRepository = registerRepository;
    }

    public void createUser(Users user) {
        this.registerRepository.createUser(user);
    }
}
