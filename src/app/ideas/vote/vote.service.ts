import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIClient }  from '../../../_lib/APIClient';

@Injectable({
    providedIn: 'root'
})
export class VoteService extends APIClient<any> {

    public up(ideaId: string): Observable<any> {

        return this.post(`ideas/${ ideaId }/vote/up`);

    }

    public down(ideaId: string): Observable<any> {

        return this.post(`ideas/${ ideaId }/vote/down`);

    }

}
