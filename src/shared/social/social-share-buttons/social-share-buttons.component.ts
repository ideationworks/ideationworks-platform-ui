import { Component, Input }         from '@angular/core';
import { SocialProviders }          from '../social-providers';
import { SocialShareDialogService } from '../social-share-dialog/social-share-dialog.service';

@Component({

    selector: 'app-social-share-buttons',
    templateUrl: './social-share-buttons.component.html',
    styleUrls: [ './social-share-buttons.component.scss' ]

})
export class SocialShareButtonsComponent {

    public icons = SocialProviders.icons;

    @Input() public message: string;

    public constructor(public socialShareDialogService: SocialShareDialogService) {

    }

    public onShareClick(icon: any): void {

        this.socialShareDialogService.open(icon, this.message);

    }

}
