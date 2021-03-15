import {Component, OnInit} from '@angular/core';
import {User} from '../shared/model/user';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    public currentUser: User;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.currentUser = this.route.snapshot.data.currentUser;
        console.log(this.currentUser);
    }
}
