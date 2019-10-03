import { Component }             from '@angular/core';
import { AuthenticationService } from '../../../_lib/AuthenticationService';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

    public constructor(public authenticationService: AuthenticationService) {

    }

}
