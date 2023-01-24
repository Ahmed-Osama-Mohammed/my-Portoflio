import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  constructor() { }


  doAnimation(element:string,px:number,animationClass:string,delay?:number) {
    let x:any =document.querySelector(element)
    if(window.scrollY > px){
    x.style.visibility = "visible";
    x.classList.add('animate__animated' , animationClass , 'animate__delay-'+delay+'s');
    }
  }


  ngOnInit(): void {
    window.onscroll = ()=> {
    this.doAnimation(".el1",474,'animate__fadeInUp',.5) 
    this.doAnimation(".er1",474,'animate__fadeInUp',.5) 
    this.doAnimation(".el2",713,'animate__fadeInUp',.5) 
    this.doAnimation(".er2",713,'animate__fadeInUp',.5) 
    this.doAnimation(".el3",1146,'animate__fadeInUp',.5) 
    this.doAnimation(".er3",1146,'animate__fadeInUp',.5) 
    }
  }

}
