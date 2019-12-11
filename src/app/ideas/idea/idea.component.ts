import { Component }             from '@angular/core';
import { ActivatedRoute }        from '@angular/router';
import { NgxuxAutocompleteItem } from '@ngxux/autocomplete';
import { IdeasService }          from '../ideas.service';
import { Idea }                  from './idea';
import { IdeaService }           from './idea.service';

@Component({
    selector: 'app-idea',
    templateUrl: './idea.component.html',
    styleUrls: [ './idea.component.scss' ]
})
export class IdeaComponent {

    public idea: Idea = {

        id: '1234-a23234-arf4a3f34f3-fa34ff33f',
        name: 'Create trello clone!',
        description: 'asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. <br><br>asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. <br><br>asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. asdf asdf asdfasf as dfsadfasfa asdfasdfasdf. '

    };

    public tags: Array<NgxuxAutocompleteItem> = [

        { label: 'angular' },
        { label: 'typescript' },
        { label: 'javascript' },

    ];

    public constructor(private ideasService: IdeasService,
                       private ideaService: IdeaService,
                       private route: ActivatedRoute) {

        route.params.subscribe(params => {

            if (params.id) {

                ideasService.ideaGetById(params.id).subscribe(idea => {

                    ideaService.idea$.next(idea);

                    this.idea = idea;

                });

            }

        });

    }

}
