import { CommonModule }                from '@angular/common';
import { NgModule }                    from '@angular/core';
import { ReactiveFormsModule }         from '@angular/forms';
import { NgProgressModule }            from '@ngx-progressbar/core';
import { NgProgressHttpModule }        from '@ngx-progressbar/http';
import { NgxuxAutocompleteModule }     from '@ngxux/autocomplete';
import { NgxuxMatDialogModule }        from '@ngxux/ngxux-mat-dialog';
import { ClipboardModule }             from 'ngx-clipboard';
import { GravatarModule }              from 'ngx-gravatar';
import { TruncatePipe }                from '../_lib/TruncatePipe';
import { MaterialModule }              from './material/material.module';
import { MdEditorComponent }           from './md-editor/md-editor.component';
import { SocialLoginButtonComponent }  from './social/social-login-button/social-login-button.component';
import { SocialShareButtonsComponent } from './social/social-share-buttons/social-share-buttons.component';
import { SocialShareDialogComponent }  from './social/social-share-dialog/social-share-dialog.component';
import { UserLabelComponent }          from './user-label/user-label.component';


@NgModule({

    declarations: [

        MdEditorComponent,
        TruncatePipe,
        UserLabelComponent,
        SocialLoginButtonComponent,
        SocialShareButtonsComponent,
        SocialShareDialogComponent,

    ],

    imports: [

        ClipboardModule,
        CommonModule,
        GravatarModule,
        MaterialModule,
        NgProgressModule,
        NgProgressHttpModule,
        NgxuxAutocompleteModule,
        NgxuxMatDialogModule,
        ReactiveFormsModule

    ],

    exports: [

        ClipboardModule,

        CommonModule,
        MaterialModule,
        MdEditorComponent,
        NgProgressModule,
        NgProgressHttpModule,
        NgxuxAutocompleteModule,
        NgxuxMatDialogModule,
        ReactiveFormsModule,
        TruncatePipe,
        UserLabelComponent,
        SocialLoginButtonComponent,
        SocialShareButtonsComponent,

    ],

    entryComponents: [

        SocialShareDialogComponent,

    ]

})
export class SharedModule {
}
