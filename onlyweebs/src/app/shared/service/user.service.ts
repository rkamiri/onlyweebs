import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpclient: HttpClient) {
    }

    login(value: object): Observable<string> {
        return this.httpclient.post<string>('http://localhost:8080/login', value);
    }

    register(value: object): Observable<any> {
        return this.httpclient.post('http://localhost:8080/register', value);
    }

    getCurrentUser(): Observable<User> {
        return this.httpclient.get<User>('http://localhost:8080/users/current');
    }

    updateCurrentUser(value: object): Observable<User> {
        return this.httpclient.put<User>('http://localhost:8080/users/update', value);
    }
}
