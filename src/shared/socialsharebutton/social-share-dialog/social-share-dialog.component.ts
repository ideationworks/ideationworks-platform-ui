import {Component} from '@angular/core';
import {SocialShareService} from './social-share.service';

@Component({
    selector: 'app-social-share-dialog',
    templateUrl: './social-share-dialog.component.html',
    styleUrls: ['./social-share-dialog.component.scss']
})
export class SocialShareDialogComponent {

    public icons: Array<any> = [

        {
            icon: 'fab fa-Twitter',
            label: 'Twitter'
        },

        {

            icon: 'fab fa-instagram',
            label: 'Instagram',

        }

    ];

    public constructor(public socialShareService: SocialShareService) {


    }

    public onNextClick(): void {

        window.open('https://twitter.com/intent/tweet?url=test');

    }

}
