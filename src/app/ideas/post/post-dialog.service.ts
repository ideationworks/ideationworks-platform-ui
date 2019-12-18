import { Injectable }                                    from '@angular/core';
import { NgxuxMatDialogService, NgxuxMatDialogSettings } from '@ngxux/ngxux-mat-dialog';
import { PostComponent }                                 from './post.component';

@Injectable({
    providedIn: 'root'
})
export class PostDialogService {

    public constructor(private ngxuxMatDialogService: NgxuxMatDialogService) {

    }

    public open(): void {

        this.ngxuxMatDialogService.open(PostComponent, new NgxuxMatDialogSettings({

            id: 'post',
            title: 'Post new idea!',

            width: '800px',
            height: '920px',

            nextShow: true,
            nextLabel: 'Post'

        }));

    }

    public close(): void {

        this.ngxuxMatDialogService.close('post');

    }

}
