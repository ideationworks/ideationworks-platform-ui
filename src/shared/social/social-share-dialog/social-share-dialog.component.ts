import { Component }             from '@angular/core';
import { NgxuxMatDialogService } from '@ngxux/ngxux-mat-dialog';
import { SocialShareService }    from './social-share.service';

@Component({
    selector: 'app-social-share-dialog',
    templateUrl: './social-share-dialog.component.html',
    styleUrls: [ './social-share-dialog.component.scss' ]
})
export class SocialShareDialogComponent {

    /**
     * Called when the component is drawn on the screen.
     *
     * @param socialShareService
     * @param ngxuxMatDialogService
     */
    public constructor(public socialShareService: SocialShareService,
                       private ngxuxMatDialogService: NgxuxMatDialogService) {

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
        window.open(this.socialShareService.icon.getUrl(this.socialShareService.message, location.href), '_blank', 'width=500,height=600,toolbar=no,menubar=no');

        //
        // Close the opened dialog component.
        //
        this.ngxuxMatDialogService.close('social-share');

    }

}
