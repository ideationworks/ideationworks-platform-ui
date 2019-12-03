import { Component }    from '@angular/core';
import { IdeasService } from './ideas.service';

@Component({
    selector: 'app-ideas',
    templateUrl: './ideas.component.html',
    styleUrls: [ './ideas.component.scss' ]
})
export class IdeasComponent {

    public constructor(private ideasService: IdeasService) {

    }

}
