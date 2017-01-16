import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})

export class AppComponent implements OnInit {

  sidebarLock: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onLockSideBar(e){
    this.sidebarLock = e;
  }
}
