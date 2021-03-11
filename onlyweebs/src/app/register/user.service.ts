import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

interface ReturnedId {
    createdId: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpclient: HttpClient) {}

    login(value: object): Observable<any> {
        console.log(value);
        return this.httpclient.post('http://localhost:8080/login', value);
    }

    register(value: object): Observable<any> {
        console.log(value);
        return this.httpclient.post('http://localhost:8080/register', value);
    }
}
