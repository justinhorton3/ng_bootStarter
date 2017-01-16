import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})

export class AppComponent implements OnInit {

  sidebarLock: boolean = false;
  isSidebarOpen: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toggleMobleSidebar(e) {
    this.isSidebarOpen = e;
    this.sidebarLock = e;
  }

  onLockSideBar(e){
    this.sidebarLock = e;
    console.log("onLockSideBar ",  this.sidebarLock = e );
  }
}
