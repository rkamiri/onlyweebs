import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface ReturnedId {
    createdId: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpclient: HttpClient) {}

    login(value: object): Observable<ReturnedId> {
        console.log(value);
        return this.httpclient.post<ReturnedId>('http://localhost:8080/login', value);
    }
}
