import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
    selector: 'app-category-create',
    templateUrl: './category-create.component.html',
    styleUrls: [ './category-create.component.scss' ]
})
export class CategoryCreateComponent {

    public formGroup = new FormGroup({

        name: new FormControl('', [

            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(255)

        ])

    });

    public constructor(private categoryService: CategoryService) {
    }

    public onCreateClick() {
        this.categoryService.categoryCreate(this.formGroup.value).subscribe(category => {
            console.log('category create response', category);
        });
    }

}
