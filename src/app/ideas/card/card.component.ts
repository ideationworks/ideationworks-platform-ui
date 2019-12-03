import { Component }    from '@angular/core';
import { IdeasService } from '../ideas.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: [ './card.component.scss' ]
})
export class CardComponent {

    public constructor(private ideasService: IdeasService) {

    }

}
