import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { SharedModule }          from '../../shared/shared.module';
import { CardComponent }         from './card/card.component';
import { IdeaComponent }         from './idea/idea.component';
import { IdeasComponent }        from './ideas.component';
import { PostComponent }         from './post/post.component';
import { SearchComponent }       from './search/search.component';
import { VoteComponent } from './vote/vote.component';

@NgModule({

    declarations: [

        IdeasComponent,
        IdeaComponent,
        CardComponent,
        PostComponent,
        SearchComponent,
        VoteComponent

    ],

    imports: [

        CommonModule,
        LMarkdownEditorModule,
        SharedModule,

        RouterModule.forChild([

            {

                path: 'ideas',
                component: IdeasComponent,

                children: [

                    {

                        path: 'search',
                        component: SearchComponent

                    }, {

                        path: ':id',
                        component: IdeaComponent

                    }, {

                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'search'
                        
                    }

                ]

            }

        ])

    ],

    exports: [

        CardComponent

    ],

    entryComponents: [

        PostComponent

    ]

})
export class IdeasModule {
}
