import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  public scroll(elementId: string): void { setTimeout(()=>{
    this.viewportScroller.scrollToAnchor(elementId);},200)
    
  }
  
  ngOnInit(): void {
    let x:any=document.querySelector("#vid")
    x.play()
  }

}

