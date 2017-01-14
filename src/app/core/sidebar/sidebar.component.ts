import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector : "jbh-sidebar",
  templateUrl : "./sidebar.component.html",
  styleUrls : [ "./sidebar.component.css"],
  providers:[  ]

})

export class SidebarComponent implements OnInit {

  @Output() tellyodaddy: EventEmitter<boolean> = new EventEmitter<boolean>();

  sidebarOpen: boolean = false;
  sidebarLocked: boolean = false;
  showAppDrawer: boolean = false;

  test : string = "sidebar works!";
  appRoutes : any[] = [];

  constructor(
      private _router: Router,
      // private _sidebarState: SidebarState
  ) {}

  onToggleSidebar(): void {
    if( !this.sidebarLocked ){
      this.sidebarOpen = !this.sidebarOpen;
    }

    if( !this.sidebarOpen ){
      this.showAppDrawer = false;
    }
  }

  onLockSidebar(): void {
    this.sidebarLocked = !this.sidebarLocked;
    this.tellyodaddy.emit(this.sidebarLocked);

    if( this.sidebarLocked ){
      this.sidebarOpen = true;
    }
  }

  onToggleAppDrawer(): void {
    this.showAppDrawer = !this.showAppDrawer;
  }

  getSidebarLockIcon():any {
    return this.sidebarLocked ? 'fa fa-stop-circle-o' : 'fa fa-circle-o';
  }
  isSidebarLocked() {
    console.log(" isSidebarLocked Function Call " + this.sidebarLocked );
    return this.sidebarLocked ? 'router-container sidebar-locked' : 'router-container';

  }

  ngOnInit(): void {
    let routes = this._router.config;
    let currentRoute = this._router.routerState.snapshot.root;
    let _Array: any = [];

    routes.forEach( value => {

      if(value.data){
        let _OldData: any = value.data;
        let _NewData: any = {};

        if(_OldData.createSidebarEntry){

          _NewData = {
            path : value.path,
            order : _OldData.order || 99,
            icon : _OldData.pathIcon,
            display : _OldData.pathDisplayText,
            component : value.component
          }
          _Array.push(_NewData);
        }

      }
    });
    this.appRoutes = _.sortBy(_Array, "order");
  }
}
