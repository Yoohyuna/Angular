import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp11-pro';
  //이벤트 처리구문
  handleEvent(){
    //1.요청하기위한 promise객체 필요
    //var promise=new Promise(function(resolve,reject){
      var promise=new Promise((resolve,reject)=>{
        console.log("1");
        //요청을 받았다면 임의로 호출하는 함수를 지정
        //resolve(100);
        reject(200);
        console.log("2");
    });
        console.log("3");
    //promise.then(function(x){ //resolve
      promise.then((x)=>{
        console.log("resolve",x);
    //},function(y){//reject
    //  },(y)=>{
      }).catch((y)=>{
        console.log("reject",y);
    });
        console.log("4");
  }
}
