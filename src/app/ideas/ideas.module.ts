import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { SharedModule }          from '../../shared/shared.module';
import { CardComponent }         from './card/card.component';
import { IdeaComponent }         from './idea/idea.component';
import { IdeasComponent }        from './ideas.component';
import { PostComponent }         from './post/post.component';

@NgModule({

    declarations: [

        IdeasComponent,
        IdeaComponent,
        CardComponent,
        PostComponent

    ],

    imports: [

        CommonModule,
        LMarkdownEditorModule,
        SharedModule

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
