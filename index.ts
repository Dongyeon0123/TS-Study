// 웹 브라우저는 ts를 인식하지 못하기 때문에, js로 직접 변환해야함.
// 터미널에 tsc -w 입력하면, ts를 js로 자동으로 변환해줌.
// html에서 ts 파일을 사용하고 싶으면, 변환된 js파일을 사용해야함.

let 이름 : String = "kim";

// 이름 = 123; - 에러남

// type의 종류 간단하게 몇개
// String, number, boolean, null,
// undefined, bigint, [], {} 등

let 배열 : string[] = ['park', 'son'];
// array안에 string이 들어가 있어야 함.이라는 뜻

let 오브젝트 : { name : string } = { name : 'shim' };
// name에는 문자만 들어올 수 있음.

let 이름2 : string | number = 'kim';
// 변수에 숫자 혹은 문자를 넣을 수 있음.

// Type은 변수에 담아서 쓸 수 있음. (Type alias)
// 타입 작명은 보통 첫글자를 대문자로 많이 함. (ex) Name)
type 타입 = string | number;
// 이렇게 두개의 타입을 지정하는것은 Union Type이라고함.
let 이름3 : 타입 = 'lee'

// 1. 파라미터에 타입 지정을 하고싶으면,
function 함수(파라미터 : number) : number // 3. 어떤 Type이 리턴될 지를 알려줌.
{
    return 파라미터 * 2;
}
// 2. 이런식으로 파라미터에 타입 지정 가능.

// array에 쓸 수 있는 tuple 타입
type Member  = [number, boolean];
let John : Member = [123, true];
// 이런식으로, 배열에서 첫번째는 무조건 number, 두번째는 boolean타입이 들어와야함.

type Member1 = {
    name : string
}
let John1 : Member1 = { name : 'kim' }

// object에 name 즉, string뿐만 아니라 age, address등이 들어가야 된다고 하면,
type Member2 = {
    [key : string] : string,
}
// 이런식으로 지정해주는데, 이 코드의 뜻은
// 글자로 된 모든 object 속성의 타입은 'string' 이라는 뜻임.

// class에도 타입 지정 가능.
class User {
    name;
    constructor(name :string) {
        this.name = name;
    }
}

// TypeScript는 자동으로 타입을 씌워줌.
let 회원 = 'park';

// Q1. 이름, 나이, 출생지역을 변수로 저장
let 정보 :string = 'Dong yeon Lee';
let 나이 :number = 25;
let 출생지역 :string = '경기도 수원'

// Q2. 좋아하는 가수의 곡과 가수이름을 object에 저장.(문자만)
let 가수 :{ 가수이름 :string, 노래 :string } = { 가수이름 : '아이유', 노래 : '아이와 나의 바다' };

// Q3. member, days, started에 타입지정
let project : {
    member :string[],
    days :number,
    started: boolean
  } = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }

  let 회원들 :(number | string)[] = [1,'2',3];
  let 옵젝 :{ a :string | number} = { a : 'kim' };

  let user :string = 'kim';
  let age :undefined = undefined;
  let married :boolean = false; 
  let 철수 :(string | undefined | boolean)[] = [user, age, married];

  let 학교 : {
    score :(number | boolean)[],
    teacher :string,
    friend :string | string[],
  } = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher];

function X2(a :number) :number {
    return a * 2;
}
console.log (X2(5));

function X(b? :number) :void {

}
// 위 코드에서 void는 실수로 뭔가를 return하는걸 사전에 막을 수 있음.
// ?연산자는 들어올수도 있다 ~ 라는 뜻이긴 한데,
// (b :number | undefined ) <= 이거랑 똑같음.

function 함수5(x : number | string) :void {
    if(typeof x === 'number') {
        console.log (x + 3);
    } // x의 타입이 숫자면.
    else {
        console.log ('숫자가 아닙니다.');
    }
}
// 위 함수가 안되는 이유.
// String + number (가능)
// number + number (가능)
// 이외에는 불가능함.
// 그래서 if문 & Typeof문으로 Type Narrowing을 써야함.
function 내함수(x :number | string) {
    let arr :number[] = [];

    if (typeof x === "number") {
        arr[0] = x;
    } else {
    }
    // 주의 - if문 썼으면 끝까지 써야 안전함.
    // else, else if 안 쓰면 에러로 잡아줄 수도 있음.

    arr[1] = x as number; // assertion문법
    // 왼쪽에 있는 변수를 넘버로 써주세요 라는 뜻.
    // 용도 - 1. Narrowing할 때 씀.
    // 2. 타입을 a에서 b로 변경 X - Union type에서 씀.
    // 무슨 타입이 들어올지 100% 확신할 때 쓰는 것.
    // 그래서 대부분 첫번째 if문 방법을 많이 사용함.

    

    // arr[0] = x;
}

function 이름5(x :string) :void {
    if(x) {
        console.log('안녕하세요 ' + x);
    }
    else {
        console.log('입력이 안 됐습니다.');
    }
}
// void는 return이 없어야함.

function 자릿수세기(x : number | string) :number {
    if(typeof x == 'string') {
        return x.length;
    } else {
        return x.toString().length;
    }
}

function 결혼가능(money :number, house :boolean, charm :string) :string | void {
    let score :number = 0;
    score += money;

    if(house == true) {
        score += 500;
    }
    if(charm == '상') {
        score += 100;
    }

    if(score >= 600) {
        return '결혼 가능';
    }
}
console.log(100,true,'상');

// void란, 함수가 아무것도 return하지 않을 때 사용.
// 주로 출력, 알림, 이벤트 핸들러에 사용.
// void가 아닌 string, number, boolean 등은 return이 있어야함.
