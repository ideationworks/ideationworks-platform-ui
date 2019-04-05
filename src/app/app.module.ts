import { NgModule }        from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { BrowserModule }   from '@angular/platform-browser';
import { RouterModule }    from '@angular/router';

import { AppComponent }        from './app.component';
import { HeaderComponent }     from './header/header.component';
import { HomeWidgetComponent } from './home/home-widget/home-widget.component';
import { HomeComponent }       from './home/home.component';

@NgModule({
    declarations: [

        AppComponent,
        HeaderComponent,
        HomeComponent,
        HomeWidgetComponent

    ],

    imports: [

        BrowserModule,
        MatButtonModule,
        RouterModule.forRoot([

            {

                path: 'home',
                component: HomeComponent

            }

        ])

    ],

    providers: [],
    bootstrap: [ AppComponent ]
    
})
export class AppModule {
}
