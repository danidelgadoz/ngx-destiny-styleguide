import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenavElement: ElementRef;
  @Input() toggle;
  @Input() fixed;

  constructor() { }

  ngOnInit() {
    const submenuArray = this.sidenavElement.nativeElement.querySelectorAll('.submenu');

    if (submenuArray.length > 0) {
      submenuArray.forEach(submenu => {
        submenu.setAttribute('default-height', submenu.querySelector('dd').clientHeight);
        submenu.querySelector('dd').style.height = 0;

        submenu.querySelector('dt').addEventListener('click', (e) => {
          submenu.classList.toggle('open');
          this.slideToggle(submenu.querySelector('dd'));

          [].slice
            .call(submenuArray)
            .filter( _submenu => _submenu !== submenu )
            .map((sibiling) => {
              sibiling.querySelector('dd').style.height = 0;
              sibiling.classList.remove('open');
            });
        });
      });
    }
  }

  slideToggle(element) {
    if (element.style.height === '0px') {
      element.style.height = element.parentElement.getAttribute('default-height') + 'px';
    } else {
      element.style.height = 0;
    }
  }

}
