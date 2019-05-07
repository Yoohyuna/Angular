//1.pipe(파이프에 대한 정보) 2. pipeTransform(출력양식대로 변환할때 필요)
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate' //파이프의 이름을 지정해주는 속성(name)
})
export class MyDatePipe implements PipeTransform {

  //개발자가 지정해주는 양식대로 출력시켜주는 함수
  //1.value(출력할값) 2.args(출력양식패턴) 2019-05-01
  transform(value: string, args?: string): string {
    if(value.length==8){
    return value.substring(0,4)+args+value.substring(4,6)+args+value.substring(6,8);
    }
  }
}
