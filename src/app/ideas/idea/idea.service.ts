import { Injectable }    from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Idea }          from './idea';

@Injectable({
    providedIn: 'root'
})
export class IdeaService {

    public idea$: ReplaySubject<Idea> = new ReplaySubject();

}
