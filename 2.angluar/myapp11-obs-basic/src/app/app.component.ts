import { Component } from '@angular/core';

//추가
//import {Observable} from 'rxjs/Rx';  6.x
import {Observable} from 'rxjs/Observable';//7.x

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp11-obs-basic';

  //이벤트 처리
  observableCreate(){ //p248 Observable을 이용해서 데이터받아와서 출력
     var observable =Observable.create(function(observer){
          observer.next("1.저장");
          observer.next("2.저장");
          observer.next("3.저장");
          //setInterval(호출할 함수명,초)->반복해서 계속호출
          setTimeout(function(){ //한번만 호출=>1초마다 계속반복해서 호출->재귀호출
            observer.next("4.저장");
            observer.complete();//모든 수행할 문장이 다 처리했을때 호출
          },1000);//1초뒤에
          
          observer.next("5.저장");
     });
     //꺼내온 데이터를 받아서 처리->subscribe()이용
     observable.subscribe({
        next:function(res){
          console.log("next:"+res);
        },
        error:function(error){
          console.log("error:"+error);
        },
        complete:function(){
          console.log("complete!!");
        }
     });
  }//이벤트처리 함수
}
