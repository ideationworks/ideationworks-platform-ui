import { Injectable } from '@angular/core';
import { Category } from './category';
import { APIClient } from '../../_lib/APIClient';
import { Pageable } from '../../_lib/Pageable';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoryService extends APIClient<Category> {

    public categoriesGet(): Observable<Pageable<Category>> {

        return this._getPageable('categories/search');

    }

    public categoryCreate(category: Category): Observable<Category> {
        return this.post('categories', category);
    }

}
