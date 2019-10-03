import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';
import { SharedModule }            from '../shared/shared.module';

import { AppComponent }         from './app.component';
import { HomeModule }           from './home/home.module';
import { IdeasModule }          from './ideas/ideas.module';
import { HeaderComponent }      from './layout/header/header.component';
import { LeftToolbarComponent } from './layout/left-toolbar/left-toolbar.component';

@NgModule({

    declarations: [

        AppComponent,
        HeaderComponent,
        LeftToolbarComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        HomeModule,
        IdeasModule,
        RouterModule.forRoot([]),
        SharedModule,

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
