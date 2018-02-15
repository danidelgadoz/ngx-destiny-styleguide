import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-demo',
  templateUrl: './sidenav-demo.component.html',
  styleUrls: ['./sidenav-demo.component.css']
})
export class SidenavDemoComponent implements OnInit {
  ToggleSidenavDemo = true;
  SidenavFixedState = false;

  constructor() { }

  ngOnInit() {
  }

}
