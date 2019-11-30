import { Component, OnInit }     from '@angular/core';
import { AuthenticationService } from '../_lib/AuthenticationService';
import { PostDialogService }     from './ideas/post/post-dialog.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

    public constructor(private authenticationService: AuthenticationService,
                       private postDialogService: PostDialogService) {

    }

    public ngOnInit(): void {

        // this.postDialogService.open();

    }

}
