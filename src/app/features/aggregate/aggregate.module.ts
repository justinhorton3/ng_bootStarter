import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AggregateComponent } from './aggregate.component';



@NgModule({
    imports: [
        FormsModule,
        RouterModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: 'aggregate',
                component: AggregateComponent,
                data: {
                    createSidebarEntry : true,
                    pathDisplayText: "Aggregate",
                    pathIcon: `fa fa-server fa-lg pull-right`,
                    order: 2
                }
            }
        ])
    ],
    declarations: [
        AggregateComponent,

    ],
    exports : [
        AggregateComponent
    ],
    providers: [

    ]
})

export class AggregateModule { }
