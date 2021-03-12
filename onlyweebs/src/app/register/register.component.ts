import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from './user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private router: Router, private userService: UserService) {
        this.registerForm = new FormGroup({
            username: new FormControl(''),
            password: new FormControl(''),
            firstname: new FormControl(''),
            lastname: new FormControl(''),
            email: new FormControl(''),
            gender: new FormControl('')
        });
    }

    ngOnInit(): void {
        console.log(navigator.language);
    }

    onSubmit(): void {
        this.registerUser();
    }

    registerUser(): void {
        this.userService.register(this.registerForm.value).subscribe(
            () => {
                console.log(this.registerForm.value);
                console.log('je veut etre la');
                return this.router.navigate(['lists']);
            } ,
            (error) => {
                console.log(this.registerForm.value);
                console.log('je veut pas etre la');
                return;
            }
        );
    }
}
