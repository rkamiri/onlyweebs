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
    bioForm: FormGroup;
    passwordForm: FormGroup;
    private newPassWordUser: User;

    constructor(private route: ActivatedRoute, private router: Router,  private userService: UserService) {
        this.personalInfoForm = new FormGroup({
            id: new FormControl(''),
            username: new FormControl(''),
            firstname: new FormControl(''),
            lastname: new FormControl(''),
            email: new FormControl('')
        });
        this.bioForm = new FormGroup({
            id: new FormControl(''),
            bio: new FormControl(''),
            username: new FormControl(''),
            firstname: new FormControl(''),
            lastname: new FormControl(''),
            email: new FormControl('')
        });
        this.passwordForm = new FormGroup({
            id: new FormControl(''),
            username: new FormControl(''),
            oldPassword: new FormControl(''),
            newPasswordA: new FormControl(''),
            newPasswordB: new FormControl('')
        });
    }

    ngOnInit(): void {
        this.currentUser = this.route.snapshot.data.currentUser;
        this.personalInfoForm.controls.id.setValue( this.currentUser.id);
        this.personalInfoForm.controls.username.setValue( this.currentUser.username);
        this.personalInfoForm.controls.firstname.setValue( this.currentUser.firstname);
        this.personalInfoForm.controls.lastname.setValue( this.currentUser.lastname);
        this.personalInfoForm.controls.email.setValue( this.currentUser.email);
        this.bioForm.controls.id.setValue( this.currentUser.id);
        this.bioForm.controls.bio.setValue( this.currentUser.bio);
        this.bioForm.controls.username.setValue( this.currentUser.username);
        this.bioForm.controls.firstname.setValue( this.currentUser.firstname);
        this.bioForm.controls.lastname.setValue( this.currentUser.lastname);
        this.bioForm.controls.email.setValue( this.currentUser.email);

        this.passwordForm.controls.id.setValue( this.currentUser.id);
        this.newPassWordUser = this.currentUser;

    }

    updatePersonalInfos(): void {
        this.userService.updateCurrentUser(this.personalInfoForm.value).subscribe(
            (data) => {
                if (data.username !== this.currentUser.username){
                    this.userService.logout();
                    return this.router.navigate(['login']);
                }
                location.reload();

            },
            (error) => {
                console.log(error);
            }
        );
    }

    updateBio(): void {
        this.userService.updateCurrentUser(this.bioForm.value).subscribe(
            (data) => {
                location.reload();
            },
            (error) => {
                console.log(error);
            }
        );
    }

    updatePassword(): void {

        if (this.passwordForm.get('newPasswordA').value === this.passwordForm.get('newPasswordB').value && this.passwordForm.get('newPasswordA').value !== '' && this.passwordForm.get('newPasswordB').value !== '') {
            this.currentUser.password = this.passwordForm.get('newPasswordA').value;
            this.userService.updateCurrentUser(this.newPassWordUser).subscribe(
                (data) => {
                    this.userService.logout();
                    return this.router.navigate(['login']);
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }
}
