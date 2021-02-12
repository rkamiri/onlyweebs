import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
    signinForm: FormGroup;

    constructor(private router: Router, private userService: UserService) {
        this.signinForm = new FormGroup({
            username: new FormControl(''),
            password: new FormControl('')
        });
    }

    ngOnInit(): void { }

    onSubmit(): void {
        console.warn(this.signinForm.value);
        this.signInUser();
    }

    signInUser(): void {
        this.userService.signin(this.signinForm.value);
        console.warn('200 is good');
        this.router.navigate(['account']).then();
    }
}
