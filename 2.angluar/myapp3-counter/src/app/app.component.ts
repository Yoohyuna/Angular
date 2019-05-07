import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp3-counter';
  //추가
  curVal=0;//현재값 //{{curVal}}->red<-grey->green
  manualVal=0;//강제로 저장할값을 입력시 저장할 변수
  static LIMIT_CNT=100;//최대값 지정
  //static 메서드명()->정적메서드->클래스명.정적메서드명()

  colorByValue(){ //현재값에 따른 색깔의 변화
     if(this.curVal > 0) return 'green'; //[style.backgroundColor]="green"
     else if(this.curVal < 0) return 'red';
     else return 'grey';
  }

  inc(){ //증가->curVal+1
   const tempVal=this.curVal+1;
   if(this.checkLimitCnt(tempVal)){
     this.curVal=tempVal;//100보다 작은경우->//{{curVal}}
   }
  }
  dec(){ //감소 =>curVal-1
    const tempVal=this.curVal-1;
   if(this.checkLimitCnt(tempVal)){
     this.curVal=tempVal;//100보다 작은경우->//{{curVal}}
   }
  }
  //강제저장->직접 입력
  setValue(){
     if(this.checkLimitCnt(this.manualVal)){ //100보다 적게 입력을 하는 경우
       this.curVal=this.manualVal;
     }
     this.manualVal=0;//초기값(다시 입력받은값을 반영)
  }
  //입력받은 값이 지정한 최대값보다 큰지 작은지를 체크->true or false
  checkLimitCnt(val){
    if(Math.abs(val) < AppComponent.LIMIT_CNT){ //50 or -50
      return true;
    }
    //삼항연산자->조건식?참인값:거짓인값
    const target=val > 0?'증가':'감소';
    alert(`더 이상 ${target} 시킬 수 없습니다.!`)
    return false;
  }
}
