import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NgProgressModule} from '@ngx-progressbar/core';
import {NgProgressHttpModule} from '@ngx-progressbar/http';
import {NgxuxAutocompleteModule} from '@ngxux/autocomplete';
import {NgxuxMatDialogModule} from '@ngxux/ngxux-mat-dialog';
import {ClipboardModule} from 'ngx-clipboard';
import {GravatarModule} from 'ngx-gravatar';
import {TruncatePipe} from '../_lib/TruncatePipe';
import {MaterialModule} from './material/material.module';
import {MdEditorComponent} from './md-editor/md-editor.component';
import {UserLabelComponent} from './user-label/user-label.component';
import {ButtonLoginSocialComponent} from './button-login-social/button-login-social.component';
import {SocialsharebuttonComponent} from './socialsharebutton/socialsharebutton.component';
import {SocialShareDialogComponent} from './socialsharebutton/social-share-dialog/social-share-dialog.component';


@NgModule({

    declarations: [

        MdEditorComponent,
        TruncatePipe,
        UserLabelComponent,
        ButtonLoginSocialComponent,
        SocialsharebuttonComponent,
        SocialShareDialogComponent,

    ],

    imports: [

        ClipboardModule,
        CommonModule,
        GravatarModule,
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
        TruncatePipe,
        UserLabelComponent,
        ButtonLoginSocialComponent,
        SocialsharebuttonComponent,

    ],

    entryComponents: [

        SocialShareDialogComponent,

    ]

})
export class SharedModule {
}
