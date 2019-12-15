import { Component, OnInit }           from '@angular/core';
import { CategoryCreateDialogService } from './category-create/category-create-dialog.service';
import { Pageable }                    from '../../_lib/Pageable';
import { Category }                    from './category';
import { CategoryService }             from './category.service';

@Component({
    selector: 'app-manage',
    templateUrl: './category.component.html',
    styleUrls: [ './category.component.scss' ]
})
export class CategoryComponent implements OnInit {

    public categories: Pageable<Category>;

    constructor(private categoryCreateDialogService: CategoryCreateDialogService,
                categoryService: CategoryService) {
        categoryService.categoriesGet().subscribe(pageable => this.categories = pageable);
    }

    ngOnInit() {
    }

    categoryCreate() {
        this.categoryCreateDialogService.open();
    }

}
