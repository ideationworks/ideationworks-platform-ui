import {Component, OnInit} from '@angular/core';
import {PasswordDialogService} from './password/password-dialog.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor(public passwordDialogService: PasswordDialogService) {
    }

    ngOnInit() {
    }

}
