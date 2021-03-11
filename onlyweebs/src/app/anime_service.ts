import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

/*interface ReturnedId {
    createdId: string;
}*/

@Injectable({
    providedIn: 'root'
})
export class AnimeService {

    constructor(private httpclient: HttpClient) {}

    getAllAnime(): Observable<object> {
        return this.httpclient.get('http://localhost:8080/anime');
    }
}
