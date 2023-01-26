import { LoaderService } from './../services/loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Portfolio';

  constructor(public loader:LoaderService){}
  ngAfterViewInit(){
    this.loader.setLoading(false)
  }
}
