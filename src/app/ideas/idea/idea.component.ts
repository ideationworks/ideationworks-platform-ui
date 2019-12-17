import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgxuxAutocompleteItem} from '@ngxux/autocomplete';
import {IdeasService} from '../ideas.service';
import {Idea} from './idea';
import {IdeaService} from './idea.service';
import {SocialShareDialogService} from '../../../shared/socialsharebutton/social-share-dialog/social-share-dialog.service';

@Component({
    selector: 'app-idea',
    templateUrl: './idea.component.html',
    styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {

    public idea: Idea;

    public tags: Array<NgxuxAutocompleteItem> = [

        {label: 'angular'},
        {label: 'typescript'},
        {label: 'javascript'},

    ];

    public constructor(private ideasService: IdeasService,
                       private ideaService: IdeaService,
                       private socialShareDialogService: SocialShareDialogService,
                       private route: ActivatedRoute) {

        this.idea = this.ideaService.testIdea;

        route.params.subscribe(params => {

            if (params.id) {

                ideasService.ideaGetById(params.id).subscribe(idea => {

                    ideaService.idea$.next(idea);

                    this.idea = idea;

                });

            }

        });

    }

    public ngOnInit() {

        this.socialShareDialogService.open('asdfasdfasdfs share me yo');

    }

}
