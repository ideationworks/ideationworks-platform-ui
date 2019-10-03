import { CommonModule }   from '@angular/common';
import { NgModule }       from '@angular/core';
import { SharedModule }   from '../../shared/shared.module';
import { CardComponent }  from './card/card.component';
import { IdeaComponent }  from './idea/idea.component';
import { IdeasComponent } from './ideas.component';

@NgModule({

    declarations: [

        IdeasComponent,
        IdeaComponent,
        CardComponent

    ],

    imports: [

        CommonModule,
        SharedModule

    ],

    exports: [

        CardComponent
        
    ]

})
export class IdeasModule {
}
