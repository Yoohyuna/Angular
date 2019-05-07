import { Injectable } from '@angular/core';

//jsp->인터페이스 설계할때 사용(=서비스)->각 컴포넌트에서 공통으로 사용될 메서드를 선언
import {HttpClient} from '@angular/common/http';  //6.x=>Http
import './rxjs-operator';//rxjs->서버에 접속->데이터를 가져오기위해서 필요
import {Observable} from 'rxjs/observable';//rxjs/RX->6.x 예외처리->throw,catch
import {Person} from './person';//가져온 데이터를 필드별로 담기위해서(DTO)

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }  //http:Http->6.x
  //1.회원리스트
   getPersonList(){
     var url="http://localhost:8090/AngularWeb2/getPersonList.jsp";
     return this.http.get(url).map(res=>res);
     //map(여러개의 데이터를 받아올때 사용하는 함수)->json객체형태로 받아온다.
     //this.http객체명.get(요청경로명 및 요청명령어)
   }

  //2.회원등록

  //3.회원id에 해당되는 데이터 찾기

  //4.회원수정

  //5.회원삭제

  //6.공통으로 에러메세지를 출력할 함수를 작성
  private handleError(error:Response | any){
    //Observable.throw(에러객체명)//에러정보가 출력
    return Observable.throw("errorMesg=>"+error);
  }
}
