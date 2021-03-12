import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Anime} from '../shared/model/Anime';
import {AnimeService} from '../anime/animeService';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AnimeListResolver implements Resolve<Anime[]> {
    constructor(private service: AnimeService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Anime[]> | Promise<Anime[]> | Anime[] {
        return this.service.getAllAnime();
    }
}
