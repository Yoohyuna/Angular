//CustomValidator.ts로 저장

import {FormControl} from '@angular/forms';

//커스텀 유효성 검사클래스 작성
export class CustomValidator{

    //유효성 검사를 체크해주는 함수작성=>HttpServletRequest,HttpServletResponse(web)
    //                              =>FormControl객체가 필요(angular)
    static gt100(control:FormControl){
        //입력값이 100이상 입력을 받고싶다.
        if(control.value < 100){ //정반대->100이상(주의할점)
            console.log('control.value=>',control.value);
            return {gt100:true};// return {유효성 검사 메서드명:true} 형식 사용
        }
    return null;//유효성검사->유효X->적용X(null)
    }
}