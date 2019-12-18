import {Component, Input} from '@angular/core';
import {SocialShareDialogService} from './social-share-dialog/social-share-dialog.service';
import {SocialTypes} from '../social-types';

@Component({
    selector: 'app-socialsharebutton',
    templateUrl: './socialsharebutton.component.html',
    styleUrls: ['./socialsharebutton.component.scss']
})

export class SocialsharebuttonComponent {

    public icons = SocialTypes.icons;

    @Input() public message: string;

    public constructor(public socialShareDialogService: SocialShareDialogService) {

    }

    public onShareClick(icon: any): void {

        this.socialShareDialogService.open(icon, this.message);

    }


}
