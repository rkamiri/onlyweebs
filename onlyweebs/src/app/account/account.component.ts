import {Component, OnInit} from '@angular/core';
import {User} from '../shared/model/user';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../shared/service/user.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    public currentUser: User;
    personalInfoForm: FormGroup;

    constructor(private route: ActivatedRoute, private router: Router,  private userService: UserService) {
        this.personalInfoForm = new FormGroup({
            id: new FormControl(''),
            username: new FormControl(''),
            firstname: new FormControl(''),
            lastname: new FormControl(''),
            email: new FormControl('')
        });
    }

    ngOnInit(): void {
        this.currentUser = this.route.snapshot.data.currentUser;
        this.personalInfoForm.controls['id'].setValue( this.currentUser.id);
        this.personalInfoForm.controls['username'].setValue( this.currentUser.username);
        this.personalInfoForm.controls['firstname'].setValue( this.currentUser.firstname);
        this.personalInfoForm.controls['lastname'].setValue( this.currentUser.lastname);
        this.personalInfoForm.controls['email'].setValue( this.currentUser.email);
    }

    updatePersonalInfos(): void {
        this.userService.updateCurrentUser(this.personalInfoForm.value).subscribe(
            (data) => {
                if (data.username !== this.currentUser.username){
                    return this.router.navigate(['login']);
                }
                //return this.router.navigate(['account']);
                location.reload();

            },
            (error) => {
                console.log(error);
            }
        );
    }
}
