// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

// Modules
import { CoreModule } from './core/core.module';
import { UiModule } from './features/ui/ui.module';
import { AggregateModule } from './features/Aggregate/aggregate.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './features/Home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    AggregateModule,
    UiModule,

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
