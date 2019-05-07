//서버에서 가져온 데이터의 필드만큼->여기에 맞는 객체
export class Person{
    //id:string,name:string,age:number
    //생성자를 통해서 멤버변수(속성)을 추가할 수 있다 ex){{객체명.멤버변수}}
    constructor(public id:string,public name:string,public age:number){}
}