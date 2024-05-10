import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TradingUI';
  sidebarOpen1=true;


  toggletoolBar(){

    this.sidebarOpen1 =this.sidebarOpen1? false:true;

  }

}
