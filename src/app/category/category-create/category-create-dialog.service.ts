import { Injectable }                                    from '@angular/core';
import { NgxuxMatDialogService, NgxuxMatDialogSettings } from '@ngxux/ngxux-mat-dialog';
import { CategoryCreateComponent }                       from './category-create.component';

@Injectable({
    providedIn: 'root'
})
export class CategoryCreateDialogService {

    public constructor(private ngxuxMatDialogService: NgxuxMatDialogService) {

    }

    public open(): void {

        this.ngxuxMatDialogService.open(CategoryCreateComponent, new NgxuxMatDialogSettings({

            id: 'create',
            title: 'Create a new category!',

            width: '320px',
            height: '530px',

            nextShow: true,
            nextLabel: 'Create'

        }));

    }

    public close(): void {

        this.ngxuxMatDialogService.close('create');

    }

}
