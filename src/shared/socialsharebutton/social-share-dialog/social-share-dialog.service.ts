import {Injectable} from '@angular/core';
import {NgxuxMatDialogService, NgxuxMatDialogSettings} from '@ngxux/ngxux-mat-dialog';
import {SocialShareDialogComponent} from './social-share-dialog.component';
import {SocialShareService} from './social-share.service';

@Injectable({
    providedIn: 'root'
})
export class SocialShareDialogService {

    public constructor(private ngxuxMatDialogService: NgxuxMatDialogService,
                       private socialShareService: SocialShareService) {

    }

    /**
     * This is called from any other component that "injects" this service class
     * into it's constructor().
     *
     * @param icon
     */
    public open(icon: any, message: string): void {

        //
        // Temporarily store the value of the currently clicked
        // on icon.
        //
        // This will be used from within the dialog component after
        // it loads.
        //
        this.socialShareService.message = message;

        this.socialShareService.icon = icon;

        //
        // Now open the actual dialog component.
        //
        this.ngxuxMatDialogService.open(SocialShareDialogComponent, new NgxuxMatDialogSettings({

            id: 'social',
            title: 'Share this idea on ' + icon.label + '!',

            width: '320px',
            height: '530px',

            nextShow: true,
            nextLabel: 'Share'

        }));

    }

    public close(): void {

        this.ngxuxMatDialogService.close('signup');

    }
}
