import { Component, OnInit } from '@angular/core';
//추가(실시간으로 요청)
import './rxjs-operator';//rxjs->서버에 접속->데이터를 가져오기위해서 필요
import {Observable} from 'rxjs/observable';//rxjs/RX->6.x 예외처리->throw,catch
import {Person} from './person';//가져온 데이터를 필드별로 담기위해서(DTO)
//추가2
import {PersonService} from './person.service';//회원리스트,등록,수정,삭제 함수필요

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  //서비스 등록
  providers:[PersonService]
})
export class PersonComponent implements OnInit {
  //생성자 DI
  constructor(private service:PersonService) { 
    this.getPersonList();
  }
  
  personList;//회원리스트정보,등록,수정,삭제->결과를 담을 변수로 선언
  //1.회원리스트 출력
  getPersonList(){
    //비동기방식객체->promise객체->1.성공(데이터를 가진 promise객체반환)
    //                           2.실패(실패한 정보를 가진 promise객체반환)
    //서버에 요청->데이터를 가져온객체->promise객체로 변환->성공->then이용->멤버변수에 저장
    this.service.getPersonList().toPromise().then(res=>this.personList=res);
  }
  //2.회원등록,,
  
  ngOnInit() {
  }

}
