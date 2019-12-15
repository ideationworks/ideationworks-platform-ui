import { CommonModule }            from '@angular/common';
import { NgModule }                from '@angular/core';
import { ReactiveFormsModule }     from '@angular/forms';
import { NgProgressModule }        from '@ngx-progressbar/core';
import { NgProgressHttpModule }    from '@ngx-progressbar/http';
import { NgxuxAutocompleteModule } from '@ngxux/autocomplete';
import { NgxuxMatDialogModule }    from '@ngxux/ngxux-mat-dialog';
import { ClipboardModule }         from 'ngx-clipboard';
import { GravatarModule }          from 'ngx-gravatar';
import { TruncatePipe }            from '../_lib/TruncatePipe';
import { MaterialModule }          from './material/material.module';
import { MdEditorComponent }       from './md-editor/md-editor.component';
import { UserLabelComponent }      from './user-label/user-label.component';

@NgModule({

    declarations: [

        MdEditorComponent,
        TruncatePipe,
        UserLabelComponent

    ],

    imports: [

        ClipboardModule,
        CommonModule,
        GravatarModule,
        MaterialModule,
        ReactiveFormsModule,

        NgProgressModule,
        NgProgressHttpModule,

        NgxuxAutocompleteModule,
        NgxuxMatDialogModule,

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
        TruncatePipe,
        UserLabelComponent

    ],

    entryComponents: []

})
export class SharedModule {
}
