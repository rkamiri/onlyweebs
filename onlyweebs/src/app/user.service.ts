import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

interface ReturnedId {
    createdId: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpclient: HttpClient) {
    }

    signin(value: object): Observable<string> {
        return this.httpclient.post<ReturnedId>('http://localhost:8080/login', value).pipe(map((result) => {
            return result.createdId;
        }));
    }
}
