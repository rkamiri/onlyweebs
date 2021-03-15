package fr.paris8univ.iut.csid.csidwebrepositorybase.core.repository;

import fr.paris8univ.iut.csid.csidwebrepositorybase.core.dao.UsersDao;
import fr.paris8univ.iut.csid.csidwebrepositorybase.core.entity.Users;
import org.springframework.stereotype.Repository;


@Repository
public class UsersRepository {

    private final UsersDao usersDao;

    public UsersRepository(UsersDao usersDao) {
        this.usersDao = usersDao;
    }

    public Users findByUsername(String username) throws NoUserFoundException {
        return new Users(this.usersDao.findByUsername(username).orElseThrow(NoUserFoundException::new));
    }
}
