package fr.paris8univ.iut.csid.csidwebrepositorybase.core.repository;

import fr.paris8univ.iut.csid.csidwebrepositorybase.core.dao.AnimeDao;
import fr.paris8univ.iut.csid.csidwebrepositorybase.core.entity.Anime;
import fr.paris8univ.iut.csid.csidwebrepositorybase.core.entity.AnimeEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class AnimeRepository {

    private final AnimeDao animeDao;

    @Autowired
    public AnimeRepository(AnimeDao adao) {
        this.animeDao = adao;
    }

    public List<Anime> findAllAnime() {
        List<AnimeEntity> entities = this.animeDao.findAll();
        return entities.stream().map(x -> new Anime(x.getId(), x.getTitle(), x.getInternational_title(), x.getSynopsis(), x.getCover(), x.getRanking())).collect(Collectors.toList());
    }
}
