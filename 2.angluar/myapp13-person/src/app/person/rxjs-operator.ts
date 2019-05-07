//웹상에 요청을 할때 필요로하는 자바스크립트 라이브러리(rxjs)
import 'rxjs/add/observable/throw';//예외처리를 위해
//http모듈 사용시 Oberservable을 사용하기위해서 
import 'rxjs/add/operator/catch'; //예외처리(일반)
import 'rxjs/add/operator/debounceTime';//debounceTime(초단위)
/*
  마지막으로 전달됐던 문자열값으로부터 300밀리세컨동안 새로운 문자열으로 인한
  이벤트발생을 멈춰준다 ex)debounceTime(300); ->새로운 요청이 들어올때 대기시간을 설정
*/
//요청문자열의 변화가 있는 경우에만 실제로 요청처리
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';//요청도 기록이 된다.
import 'rxjs/add/operator/switchMap';
/*
   debounceTime(요청대기시간)과 distinctUntilChanged(실제요청)을 통해서 만들어진 최종검색결과
   를 화면에 재배치할때 필요
*/
import 'rxjs/add/operator/toPromise';//요청된 데이터를 받아서 처리할때