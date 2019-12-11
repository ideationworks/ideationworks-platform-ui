import { CommonModule }            from '@angular/common';
import { NgModule }                from '@angular/core';
import { ReactiveFormsModule }     from '@angular/forms';
import { NgProgressModule }        from '@ngx-progressbar/core';
import { NgProgressHttpModule }    from '@ngx-progressbar/http';
import { NgxuxAutocompleteModule } from '@ngxux/autocomplete';
import { NgxuxMatDialogModule }    from '@ngxux/ngxux-mat-dialog';
import { ClipboardModule }         from 'ngx-clipboard';
import { TruncatePipe }            from '../_lib/TruncatePipe';
import { MaterialModule }          from './material/material.module';
import { MdEditorComponent }       from './md-editor/md-editor.component';

@NgModule({

    declarations: [

        MdEditorComponent,
        TruncatePipe

    ],

    imports: [

        ClipboardModule,
        CommonModule,
        ReactiveFormsModule,

        NgProgressModule,
        NgProgressHttpModule,

        NgxuxAutocompleteModule,
        NgxuxMatDialogModule,

        MaterialModule,


    ],

    exports: [

        ClipboardModule,

        CommonModule,
        ReactiveFormsModule,
        NgProgressModule,
        NgProgressHttpModule,

        NgxuxAutocompleteModule,
        NgxuxMatDialogModule,

        MaterialModule,

        MdEditorComponent,
        TruncatePipe

    ],

    entryComponents: []

})
export class SharedModule {
}
