import { HttpClientModule }        from '@angular/common/http';
import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';
import { SharedModule }            from '../shared/shared.module';
import { AboutComponent }          from './about/about.component';

import { AppComponent }         from './app.component';
import { HomeModule }           from './home/home.module';
import { IdeasModule }          from './ideas/ideas.module';
import { HeaderComponent }      from './layout/header/header.component';
import { LeftToolbarComponent } from './layout/left-toolbar/left-toolbar.component';
import { OauthModule }          from './oauth/oauth.module';
import { SignupModule }         from './signup/signup.module';
import {HomeComponent} from './home/home.component';

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
        HomeModule,
        HttpClientModule,
        IdeasModule,
        OauthModule,
        RouterModule.forRoot([

            {

                path: 'about',
                component: AboutComponent
            }

        ]),
        SharedModule,
        SignupModule

    ],

    providers: [],
    bootstrap: [ AppComponent ],


})
export class AppModule {
}
