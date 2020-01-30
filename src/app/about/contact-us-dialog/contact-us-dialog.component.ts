import {Component} from '@angular/core';
import {NgxuxMatDialogService} from '@ngxux/ngxux-mat-dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-contact-us-dialog',
    templateUrl: './contact-us-dialog.component.html',
    styleUrls: ['./contact-us-dialog.component.scss']
})
export class ContactUsDialogComponent {

    public formGroup = new FormGroup({

        email: new FormControl('', Validators.required),
        message: new FormControl('', Validators.required)

    });

    /**
     * Called when the component is drawn on the screen.
     *
     * @param
     * @param ngxuxMatDialogService
     */
    public constructor(private ngxuxMatDialogService: NgxuxMatDialogService) {

    }

    /**
     * Called when the next (right) button is clicked on the
     * dialog component.
     */
    public onNextClick(): void {

        //
        // Open a new browser window and send the user to the url that
        // is called via the icon's getUrl() function.
        //
        //window.open(this.contactUsService.button.getUrl(this.contactUsService.message, location.href), '_blank', 'width=500,height=600,toolbar=no,menubar=no');

        //
        // Close the opened dialog component.
        //
        this.ngxuxMatDialogService.close('contact-us');

    }

}
