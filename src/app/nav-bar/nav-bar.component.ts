import { Component, HostListener , OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
      let element = document.querySelector('.navbar') as HTMLElement;
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('fix');
        element.classList.add('navbar-light');
        element.classList.remove('navbar-dark');
      } else {
        element.classList.remove('fix');
        element.classList.remove('navbar-light');
        element.classList.add('navbar-dark');
      }
    }

    public scroll(elementId: string): void { setTimeout(()=>{
      this.viewportScroller.scrollToAnchor(elementId);},200)
      
  }


  ngOnInit(): void {
  }

}
