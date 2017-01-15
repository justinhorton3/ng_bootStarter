import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ColorsComponent } from './colors/colors.component';
import { UiComponent } from './ui.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild([
            {
                path: 'ui',
                component: UiComponent,
                data: {
                    createSidebarEntry : true,
                    pathDisplayText: "UI Elements",
                    pathIcon: `fa fa-server fa-lg pull-right`,
                    order: 3
                },
                children : [
                    {
                        path: 'colors',
                        component: ColorsComponent,
                        data: {
                            createSidebarEntry : true,
                            pathDisplayText: "Colors",
                            pathIcon: `fa fa-bath`,
                            order: 1
                        }
                    }
                ]
            }
        ])
    ],
    declarations: [
        UiComponent,
        ColorsComponent
    ],
    providers: [

    ],
    exports: [
        UiComponent,
        ColorsComponent
    ]
})
export class UiModule {}
