import { NgModule } from '@angular/core';

import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';


@NgModule({
    imports: [
        HeaderModule,
        SidebarModule
    ],
    declarations: [ ],
    exports: [
        HeaderModule,
        SidebarModule
    ],
    providers: [ ]
})

export class CoreModule { }