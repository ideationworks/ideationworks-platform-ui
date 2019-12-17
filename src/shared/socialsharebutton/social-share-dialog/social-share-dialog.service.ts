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

    public open(message: string): void {

        this.socialShareService.message = message;

        this.ngxuxMatDialogService.open(SocialShareDialogComponent, new NgxuxMatDialogSettings({

            id: 'Social',
            title: 'Share this idea!',

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
