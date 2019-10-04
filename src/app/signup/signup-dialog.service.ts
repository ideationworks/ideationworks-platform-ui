import { Injectable }                                    from '@angular/core';
import { NgxuxMatDialogService, NgxuxMatDialogSettings } from '@ngxux/ngxux-mat-dialog';
import { SignupComponent }                               from './signup.component';

@Injectable({
    providedIn: 'root'
})
export class SignupDialogService {

    public constructor(private ngxuxMatDialogService: NgxuxMatDialogService) {

    }

    public open(): void {

        this.ngxuxMatDialogService.open(SignupComponent, new NgxuxMatDialogSettings({

            id: 'signup',
            title: 'Signup for your free account!',

            width: '320px',
            height: '530px',

            nextShow: true,
            nextLabel: 'Signup'

        }));

    }

    public close(): void {

        this.ngxuxMatDialogService.close('signup');

    }

}
