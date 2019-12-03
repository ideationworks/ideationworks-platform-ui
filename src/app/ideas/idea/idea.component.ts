import { Component }    from '@angular/core';
import { IdeasService } from '../ideas.service';

@Component({
    selector: 'app-idea',
    templateUrl: './idea.component.html',
    styleUrls: [ './idea.component.scss' ]
})
export class IdeaComponent {

    public constructor(private ideasService: IdeasService) {


    }

}
