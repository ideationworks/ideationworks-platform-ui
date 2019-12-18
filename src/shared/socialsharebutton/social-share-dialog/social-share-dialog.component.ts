import {Component} from '@angular/core';
import {SocialShareService} from './social-share.service';
import {SocialTypes} from '../../social-types';

@Component({
    selector: 'app-social-share-dialog',
    templateUrl: './social-share-dialog.component.html',
    styleUrls: ['./social-share-dialog.component.scss']
})
export class SocialShareDialogComponent {

    public icons = SocialTypes.icons;

    /**
     * Called when the component is drawn on the screen.
     *
     * @param socialShareService
     */
    public constructor(public socialShareService: SocialShareService) {

    }

    public onNextClick(): void {

        window.open('https://twitter.com/intent/tweet?url=test');
        // window.open(' https://www.facebook.com/dialog/share?');

    }

}
