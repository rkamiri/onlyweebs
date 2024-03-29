import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ListsService} from '../shared/service/lists.service';
import {Observable} from 'rxjs';
import {Lists} from '../shared/model/lists';

@Injectable({ providedIn: 'root' })
export class OneListResolver implements Resolve<Lists> {
    constructor(private service: ListsService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lists> | Promise<Lists> | Lists {
        return this.service.getOneListById(route.paramMap.get('id'));
    }
}
