import { Component }      from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeasService }   from '../ideas.service';
import { Idea }           from './idea';
import { IdeaService }    from './idea.service';

@Component({
    selector: 'app-idea',
    templateUrl: './idea.component.html',
    styleUrls: [ './idea.component.scss' ]
})
export class IdeaComponent {

    public idea: Idea;

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
