import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgxuxMatDialogService, NgxuxMatDialogSettings} from '@ngxux/ngxux-mat-dialog';
import {ContactUsDialogComponent} from './contact-us-dialog/contact-us-dialog.component';

//testing

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    public formGroup: FormGroup = new FormGroup({

        name: new FormControl('', Validators.required),
        email: new FormControl('', [

            Validators.required,
            Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)

        ]),
        message: new FormControl('', [

            Validators.minLength(8)

        ])

    });

    public constructor(private ngxuxMatDialogService: NgxuxMatDialogService) {

    }

    public onSubmitClick() {

        console.log(this.formGroup.value);
        console.log(this.formGroup.valid);

    }

    public contactUs() {

        // open the modal/component
        this.ngxuxMatDialogService.open(ContactUsDialogComponent, new NgxuxMatDialogSettings({

            id: 'contact-us',
            title: 'Contact Us',

            width: '320px',
            height: '600px',

            nextShow: true,
            nextLabel: 'Submit'


        }));

    }

    //Testing to see if code from contact-us-dialog works

}
