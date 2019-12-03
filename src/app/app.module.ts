import { HttpClientModule }        from '@angular/common/http';
import { NgModule }                from '@angular/core';
import { ReactiveFormsModule }     from '@angular/forms';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';
import { ToastrModule }            from 'ngx-toastr';
import { SharedModule }            from '../shared/shared.module';
import { AboutComponent }          from './about/about.component';

import { AppComponent }         from './app.component';
import { HomeComponent }        from './home/home.component';
import { IdeaComponent }        from './ideas/idea/idea.component';
import { IdeasModule }          from './ideas/ideas.module';
import { HeaderComponent }      from './layout/header/header.component';
import { LeftToolbarComponent } from './layout/left-toolbar/left-toolbar.component';
import { OauthModule }          from './oauth/oauth.module';
import { ProfileModule }        from './profile/profile.module';
import { SignupModule }         from './signup/signup.module';

@NgModule({

    declarations: [

        AboutComponent,
        HomeComponent,

        AppComponent,
        HeaderComponent,
        LeftToolbarComponent,


    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        IdeasModule,
        OauthModule,
        ProfileModule,
        ReactiveFormsModule,
        RouterModule.forRoot([

            {

                path: 'about',
                component: AboutComponent
            },

            {
                path: '',
                pathMatch: 'full',
                component: HomeComponent
            },
            {
                path: 'idea',
                component: IdeaComponent
            }
        ]),
        SharedModule,
        SignupModule,
        ToastrModule.forRoot({

            timeOut: 7000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            progressBar: true,
            enableHtml: true,
            closeButton: true

        }),

    ],

    providers: [],
    bootstrap: [ AppComponent ],


})
export class AppModule {
}
