import { Component }     from '@angular/core';
import { FormControl }   from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
    selector: 'app-search-header',
    templateUrl: './search-header.component.html',
    styleUrls: [ './search-header.component.scss' ]
})
export class SearchHeaderComponent {

    public searchBy: FormControl = new FormControl('recent');
    public sortBy: FormControl = new FormControl('desc');

    public constructor(public searchService: SearchService) {

        this.searchBy.valueChanges.subscribe(value => searchService.by(value));
        this.sortBy.valueChanges.subscribe(value => searchService.sortBy(value));

    }

}
