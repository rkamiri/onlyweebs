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
    loginForm: FormGroup;

    constructor(private router: Router, private userService: UserService) {
        this.loginForm = new FormGroup({
            username: new FormControl(''),
            password: new FormControl('')
        });
    }

    ngOnInit(): void { }

    onSubmit(): void {
        console.warn(this.loginForm.value);
        this.loginUser();
    }

    loginUser(): void {
        this.userService.login(this.loginForm.value).subscribe(
            (returnedId) => {
                return this.router.navigate(['anime/' + returnedId]);
            } ,
            (error) => {
                return;
            }
        );
    }
}
