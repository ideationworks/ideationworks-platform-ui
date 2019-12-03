import { Component, Input } from '@angular/core';
import { ToastrService }    from 'ngx-toastr';
import { Idea }             from '../idea/idea';
import { IdeasService }     from '../ideas.service';
import { VoteService }      from './vote.service';

@Component({
    selector: 'app-vote',
    templateUrl: './vote.component.html',
    styleUrls: [ './vote.component.scss' ]
})
export class VoteComponent {

    @Input() public idea: Idea;

    public constructor(private ideasService: IdeasService,
                       private voteService: VoteService,
                       private toastrService: ToastrService) {

    }

    public voteUp(): void {

        this.toastrService.success('Idea up voted!');

    }

    public voteDown(): void {

        this.toastrService.success('Idea down voted!');

    }

}
