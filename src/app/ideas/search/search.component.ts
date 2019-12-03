import { Component }    from '@angular/core';
import { Pageable }     from '../../../_lib/Pageable';
import { Category }     from '../category';
import { IdeasService } from '../ideas.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: [ './search.component.scss' ]
})
export class SearchComponent {

    public categories: Pageable<Category>;

    public constructor(private ideasService: IdeasService) {

        ideasService.categoriesGet().subscribe(pageable => this.categories = pageable);

    }

}
