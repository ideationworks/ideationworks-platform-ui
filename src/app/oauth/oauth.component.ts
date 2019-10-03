import { Component }             from '@angular/core';
import { ActivatedRoute }        from '@angular/router';
import { AuthenticationService } from '../../_lib/AuthenticationService';

@Component({
    selector: 'app-oauth',
    templateUrl: './oauth.component.html',
    styleUrls: [ './oauth.component.scss' ]
})
export class OauthComponent {

    public constructor(private route: ActivatedRoute,
                       private authenticationService: AuthenticationService) {

        // authenticationService.handleAuthCallback();

        route.params.subscribe(params => {

            console.log(params);

        });

        route.queryParams.subscribe(params => {

            console.log(params);

        });

    }

}
