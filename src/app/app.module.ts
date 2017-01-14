import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HomeComponent } from './features/home/home.component';
import { AggregateModule } from './features/aggregate/aggregate.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    AggregateModule,

    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
        data: {
          createSidebarEntry : true,
          pathDisplayText: "Home",
          pathIcon: `fa fa-home fa-lg pull-right`,
          order: 1
        }
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
