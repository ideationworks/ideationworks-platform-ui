import { Component } from '@angular/core';
import { Idea } from '../idea/idea';
import { IdeasService } from '../ideas.service';
import { SearchService } from './search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: [ './search.component.scss' ]
})
export class SearchComponent {

    public ideas: Array<Idea>;

    public constructor(private ideasService: IdeasService,
                       public searchService: SearchService) {

        this.ideasService.ideasGet().subscribe(ideas => {

            console.log(ideas);

            this.ideas = ideas;

        })

    }


}
