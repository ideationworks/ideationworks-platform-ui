import { Component }       from '@angular/core';
import { Category }        from '../../../_lib/category';
import { Pageable }        from '../../../_lib/Pageable';
import { CategoryService } from '../../category/category.service';
import { SearchService }   from '../search/search.service';

@Component({
    selector: 'app-left-nav',
    templateUrl: './left-nav.component.html',
    styleUrls: [ './left-nav.component.scss' ]
})
export class LeftNavComponent {

    public categories: Pageable<Category>;

    public constructor(private categoryService: CategoryService,
                       public searchService: SearchService) {

        categoryService.categoriesGet().subscribe(pageable => this.categories = pageable);

    }

}
