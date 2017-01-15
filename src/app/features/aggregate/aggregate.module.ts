import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AggregateComponent } from './aggregate.component';

@NgModule({
    imports: [
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
        AggregateComponent
    ],
    exports : [
        AggregateComponent
    ],
    providers: [ ]
})

export class AggregateModule { }
