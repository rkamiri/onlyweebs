package fr.paris8univ.iut.csid.csidwebrepositorybase.core.entity;

public class Anime {
    private int id;
    private String title;
    private String international_title;
    private String synopsis;
    private String cover;
    private int ranking;

    public Anime() {}

    public Anime(int id, String title, String international_title, String synopsis, String cover, int ranking) {
        this.id = id;
        this.title = title;
        this.international_title = international_title;
        this.synopsis = synopsis;
        this.cover = cover;
        this.ranking = ranking;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getInternational_title() {
        return international_title;
    }

    public void setInternational_title(String international_title) {
        this.international_title = international_title;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public int getRanking() {
        return ranking;
    }

    public void setRanking(int ranking) {
        this.ranking = ranking;
    }
}
