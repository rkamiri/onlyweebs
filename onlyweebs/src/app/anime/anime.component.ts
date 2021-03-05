import {Component, OnInit} from '@angular/core';
import {AnimeService} from '../anime_service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-anime',
    templateUrl: './anime.component.html',
    styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
    str: object;

    constructor(private animeService: AnimeService) {
    }

    ngOnInit(): void {
        this.getAllAnime();
    }

    getAllAnime(): void {
        this.animeService.getAllAnime().subscribe(data => {
            this.str = data;
        });
    }
}
