import { Component, Input } from '@angular/core';
import { Idea }             from '../idea/idea';
import { IdeasService }     from '../ideas.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: [ './card.component.scss' ]
})
export class CardComponent {

    @Input() public idea: Idea;

    public constructor(private ideasService: IdeasService) {

    }

}
