import {Component, OnInit} from '@angular/core';
import {AnimeService} from './animeService';
import {ActivatedRoute} from '@angular/router';
import {Anime} from './Anime';

@Component({
    selector: 'app-anime',
    templateUrl: './anime.component.html',
    styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
    public anime: Anime;

    constructor(private animeService: AnimeService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.anime = this.route.snapshot.data.anime;
    }
}
