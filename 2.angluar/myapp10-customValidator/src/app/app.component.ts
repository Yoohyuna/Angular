import { Component } from '@angular/core';

//폼의 그룹을 묶어서 처리
import {FormControl,Validators,FormGroup} from '@angular/forms';
//새로 작성한 유효성검사클래스는 따로 불러온다.
import {CustomValidator} from './CustomValidator';//확장자는 생략(~.ts)
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';
//------------------------------------------------------------------
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp10-customValidator';
  //회원가입=>여러개를 유효성을 체크(묶어서 체크)->FormGroup
  //특정항목에 대해서 유효성을 체크(FormControl)=>유효성검사를 한개이상 처리->compose()함수나열
  form = new FormGroup({
    //항목이름:new FormControl(입력부분,유효성검사항목)
     lowerCase:new FormControl('',Validators.required),
     upperCase:new FormControl('',
            Validators.compose([Validators.required,
                                Validators.pattern("[A-Z]{3}")])),
    //새로 만들어서 등록만 할경우 (유효성검사항목=>내가 만든 클래스의 정적메서드로 구현)
    gt100Case:new FormControl('',CustomValidator.gt100)                         
  })
  setValue(){
     this.form.setValue({lowerCase:'abc',upperCase:'ABC',gt100Case:200})
  }
  reset(){
     this.form.setValue({lowerCase:'',upperCase:'',gt100Case:''})
  }
  //이벤트처리할때 지금 작성한 규칙들을 적용시킨다.
  handleSubmit(e){
    console.log("handleSubmit",e);//이벤트정보출력
    console.log(this.form);//정보출력
    console.log(this.form.value.lowerCase);//AAA->aaa
    console.log(this.form.valid);//true<->false
  }
}
