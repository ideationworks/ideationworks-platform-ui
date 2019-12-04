import { Injectable }   from '@angular/core';
import { Router }       from '@angular/router';
import { IdeasService } from '../ideas.service';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    public optionSearchBy: string = 'recent';
    public sort: 'asc' | 'desc' = 'asc';

    public constructor(private ideasService: IdeasService,
                       private router: Router) {

    }

    public by(by: 'recent' | 'popular') {

        console.log(by);

        this.optionSearchBy = by;

        this.updateRoute();

    }

    public sortBy(direction: 'asc' | 'desc'): void {

        this.sort = direction;

        this.updateRoute();

    }

    public updateRoute(): void {

        this.router.navigate([ '/ideas/search' ], {

            queryParams: {

                by: this.optionSearchBy,
                sort: this.sort,

            },

            queryParamsHandling: 'merge'

        });

    }

}
