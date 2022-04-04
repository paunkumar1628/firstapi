import { Component } from '@angular/core';
import { HomeservicesService } from './services/homeservices.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectapi';
  f_data:any;
  p: number = 1;
  constructor(private home:HomeservicesService){
    this.home.getdata().subscribe(data=>this.f_data=data)
  }
}
