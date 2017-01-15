import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: 'colors',
                component: ColorsComponent,
                data: {
                    createSidebarEntry : true,
                    pathDisplayText: "colors",
                    pathIcon: `fa fa-paint-brush fa-lg pull-right`,
                    order: 3
                }
            },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
    ],
    declarations: [
        ColorsComponent
    ],
    exports : [
        ColorsComponent,
        RouterModule,
        CommonModule
    ],
    providers: [ ]
})

export class ColorsModule { }
