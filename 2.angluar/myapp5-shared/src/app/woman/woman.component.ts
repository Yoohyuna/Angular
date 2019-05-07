import { Component } from '@angular/core';
//추가
import {SharedServiceService} from '../shared-service.service';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css'],
  //각자 등록->각자 사용->공유X
  providers:[SharedServiceService]

})
export class WomanComponent  {

  //추가
  mesg; //{{mesg}}
  constructor(public service:SharedServiceService){}
  addName(n){
    //서비스객체 얻어와서 addName()호출하기위해서
    this.service.addName(n);
    this.mesg=this.service.names;
  }

}
