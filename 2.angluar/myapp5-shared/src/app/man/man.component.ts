import { Component } from '@angular/core';
//추가
import {SharedServiceService} from '../shared-service.service';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.css']
  //,providers:[SharedServiceService](X) =>부모에서 이미 등록한 서비스를 man은 공유해서 불러다
  //                                       사용하기때문에 필요X
})
export class ManComponent  {

  //추가
  mesg; //{{mesg}}
  constructor(public service:SharedServiceService){}
  addName(n){
    //서비스객체 얻어와서 addName()호출하기위해서
    this.service.addName(n);
    this.mesg=this.service.names;
  }
}
