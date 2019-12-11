import { Component }     from '@angular/core';
import { Pageable }      from '../../../_lib/Pageable';
import { Category }      from '../category';
import { IdeasService }  from '../ideas.service';
import { SearchService } from '../search/search.service';

@Component({
    selector: 'app-left-nav',
    templateUrl: './left-nav.component.html',
    styleUrls: [ './left-nav.component.scss' ]
})
export class LeftNavComponent {

    public categories: Pageable<Category>;

    public constructor(private ideasService: IdeasService,
                       public searchService: SearchService) {

        ideasService.categoriesGet().subscribe(pageable => this.categories = pageable);

    }

}
