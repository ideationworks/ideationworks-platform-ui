import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Idea } from './idea';

@Injectable({
    providedIn: 'root'
})
export class IdeaService {

    public idea$: ReplaySubject<Idea> = new ReplaySubject();

    public testIdea: Idea = {

        id: '123',
        title: 'My Test Idea',
        description: 'everything is awesomasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdf',
        shareMessage: 'asdf asdf asdf asdf'

    };

}
