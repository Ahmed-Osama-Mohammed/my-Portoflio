import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit ,OnDestroy {

  constructor(private viewportScroller: ViewportScroller,private router:Router) { }

  public scroll(elementId: string): void { 
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      this.viewportScroller.scrollToAnchor(elementId);
    });
}

doAnimation(element:string,px:number,animationClass:string,delay?:number) {
  let x:any =document.querySelector(element)
  if(window.scrollY > px){
    x.style.visibility = "visible";
  x.classList.add('animate__animated' , animationClass , 'animate__delay-'+delay+'s');
  }
}



  ngOnInit(): void {
    
    window.onscroll = ()=> {
       this.doAnimation(".profile-img-wrapper",303,'animate__fadeInUp',.5) 
       this.doAnimation("#accordionExample",777,'animate__fadeInLeft',.5) 
       this.doAnimation(".profile",777,'animate__fadeInRight',.5) 
       this.doAnimation(".text-ready",1170,'animate__fadeInLeft',.5) 
       this.doAnimation(".hire",1177,'animate__fadeInUp',.5) 
       this.doAnimation(".cv",1177,'animate__fadeInUp') 
       this.doAnimation(".section-intro",1563,'animate__fadeInUp') 
       this.doAnimation(".p-t-1",1738,'animate__fadeInLeft') 
       this.doAnimation(".p-t-2",2107,'animate__fadeInLeft') 
       this.doAnimation(".p-t-3",2491,'animate__fadeInLeft') 
       this.doAnimation(".p-t-4",2863,'animate__fadeInLeft') 
       this.doAnimation(".p-i-1",1738,'animate__fadeInRight') 
       this.doAnimation(".p-i-2",2107,'animate__fadeInRight') 
       this.doAnimation(".p-i-3",2491,'animate__fadeInRight') 
       this.doAnimation(".p-i-4",2863,'animate__fadeInRight') 
       this.doAnimation(".fun-text",3424,'animate__fadeInUp') 
       this.doAnimation(".s1",4084,'animate__fadeInUp') 
       this.doAnimation(".s2",4084,'animate__fadeInUp') 
       this.doAnimation(".s3",4084,'animate__fadeInUp') 
       this.doAnimation(".s4",4334,'animate__fadeInUp') 
       this.doAnimation(".s5",4334,'animate__fadeInUp') 
       this.doAnimation(".s6",4334,'animate__fadeInUp') 
       this.doAnimation(".hire2",4926,'animate__bounceIn') 

      }
     }
     ngOnDestroy(): void {
      window.onscroll=null
    }

  }


