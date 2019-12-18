import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIClient }  from '../../_lib/APIClient';
import { Category }   from '../../_lib/category';
import { Pageable }   from '../../_lib/Pageable';

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
