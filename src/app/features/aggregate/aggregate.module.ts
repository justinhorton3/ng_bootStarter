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
                    pathDisplayText: "aggregate",
                    pathIcon: `fa fa-server fa-lg pull-right`,
                    order: 2
                }
            },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
    ],
    declarations: [
        AggregateComponent
    ],
    exports : [
        AggregateComponent,
        RouterModule,
        CommonModule
    ],
    providers: [ ]
})

export class AggregateModule { }
