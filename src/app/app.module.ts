import { HttpClientModule }        from '@angular/common/http';
import { NgModule }                from '@angular/core';
import { ReactiveFormsModule }     from '@angular/forms';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';
import { ToastrModule }            from 'ngx-toastr';
import { SharedModule }            from '../shared/shared.module';
import { AboutComponent }          from './about/about.component';
import { AppComponent }            from './app.component';
import { HomeComponent }           from './home/home.component';
import { IdeasModule }             from './ideas/ideas.module';
import { HeaderComponent }         from './layout/header/header.component';
import { LeftToolbarComponent }    from './layout/left-toolbar/left-toolbar.component';
import { OauthModule }             from './oauth/oauth.module';
import { ProfileModule }           from './profile/profile.module';
import { SignupModule }            from './signup/signup.module';
import { CategoryModule }          from './category/category.module';

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
            }, {

                path: 'home',
                component: HomeComponent

            }, {

                path: '',
                pathMatch: 'full',
                redirectTo: 'home'

            }

        ]),
        SharedModule,
        SignupModule,
        CategoryModule,
        ToastrModule.forRoot({

            timeOut: 5000,
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
