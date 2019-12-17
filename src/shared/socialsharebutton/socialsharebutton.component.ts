import {Component, Input} from '@angular/core';
import {SocialShareDialogService} from './social-share-dialog/social-share-dialog.service';

@Component({
    selector: 'app-socialsharebutton',
    templateUrl: './socialsharebutton.component.html',
    styleUrls: ['./socialsharebutton.component.scss']
})
export class SocialsharebuttonComponent {

    @Input() public message: string;

    public constructor(public socialShareDialogService: SocialShareDialogService) {

    }

}
