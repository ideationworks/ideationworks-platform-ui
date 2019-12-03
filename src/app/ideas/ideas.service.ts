import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIClient }  from '../../_lib/APIClient';
import { Pageable }   from '../../_lib/Pageable';
import { Category }   from './category';
import { Idea }       from './idea/idea';

@Injectable({
    providedIn: 'root'
})
export class IdeasService extends APIClient<Idea> {

    public categoriesGet(): Observable<Pageable<Category>> {

        return this._getPageable('categories/search');

    }

    public ideaCreate(idea: Idea): Observable<Idea> {

        return this.post('ideas', idea);

    }
    
}
