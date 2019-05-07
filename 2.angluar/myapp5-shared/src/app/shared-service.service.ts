import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  //constructor() { }
  //추가
  public names:string[]=[];//빈배열 생성->외부에 공개
  addName(n){
    this.names.push(n);
  }
  //
}
