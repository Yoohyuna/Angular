import { Component } from '@angular/core';
//추가
import {CustService} from './cust.service';

@Component({
  selector: 'app-cust', //태그이름
  templateUrl: './cust.component.html',//화면디자인
  styleUrls: ['./cust.component.css'], //스타일시트
  //추가
  providers:[CustService] //이 컴포넌트에서 사용할 서비스를 등록->다른 컴포넌트가 공유(O)
})
export class CustComponent {

  //추가
  name:string="홍길동";
  age:number=20;
  currentDate;//new Date()
   //생성자(DI) constructor injection
  constructor(public custService:CustService) {
    this.currentDate=custService.currentDate();//new Date()
   }
}
