import { Component }     from '@angular/core';
import { Idea }          from '../idea/idea';
import { IdeasService }  from '../ideas.service';
import { SearchService } from './search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: [ './search.component.scss' ]
})
export class SearchComponent {

    public ideas: Array<Idea> = [

        {

            id: 'test',
            name: 'test idea 1',
            description: 'asdfasdf asd fasdf asdfasd asdf asdf asdfasdf'

        }

    ];

    public constructor(private ideasService: IdeasService,
                       public searchService: SearchService) {


    }

}
