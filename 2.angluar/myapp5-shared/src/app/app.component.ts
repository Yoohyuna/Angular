import { Component } from '@angular/core';
//추가
import {SharedServiceService} from './shared-service.service';
//-------------------------------------------------------------
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //추가->공유하고 싶다.
  providers:[SharedServiceService]
  //
})
export class AppComponent {
  title = 'myapp5-shared';
  //추가
  mesg; //{{mesg}}
  constructor(public service:SharedServiceService){}
  addName(n){
    //서비스객체 얻어와서 addName()호출하기위해서
    this.service.addName(n);
    this.mesg=this.service.names;
  }
}
