import { LoaderService } from './../../services/loader.service';
import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller ,public loader:LoaderService) { }

  public scroll(elementId: string): void { setTimeout(()=>{
    this.viewportScroller.scrollToAnchor(elementId);},200)
    
  }
  stopLoading(){
    
  }
  

  ngOnInit(): void {
    let x:any=document.querySelector("#vid")
    x.play()
    
}
}

