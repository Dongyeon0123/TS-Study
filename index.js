// 웹 브라우저는 ts를 인식하지 못하기 때문에, js로 직접 변환해야함.
// 터미널에 tsc -w 입력하면, ts를 js로 자동으로 변환해줌.
// html에서 ts 파일을 사용하고 싶으면, 변환된 js파일을 사용해야함.
var 이름 = "kim";
// 이름 = 123; - 에러남
// type의 종류 간단하게 몇개
// String, number, boolean, null,
// undefined, bigint, [], {} 등
var 배열 = ['park', 'son'];
// array안에 string이 들어가 있어야 함.이라는 뜻
var 오브젝트 = { name: 'shim' };
// name에는 문자만 들어올 수 있음.
var 이름2 = 'kim';
// 이렇게 두개의 타입을 지정하는것은 Union Type이라고함.
var 이름3 = 'lee';
// 1. 파라미터에 타입 지정을 하고싶으면,
function 함수(파라미터) {
    return 파라미터 * 2;
}
var John = [123, true];
var John1 = { name: 'kim' };
// 이런식으로 지정해주는데, 이 코드의 뜻은
// 글자로 된 모든 object 속성의 타입은 'string' 이라는 뜻임.
// class에도 타입 지정 가능.
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// TypeScript는 자동으로 타입을 씌워줌.
var 회원 = 'park';
// Q1. 이름, 나이, 출생지역을 변수로 저장
var 정보 = 'Dong yeon Lee';
var 나이 = 25;
var 출생지역 = '경기도 수원';
// Q2. 좋아하는 가수의 곡과 가수이름을 object에 저장.(문자만)
var 가수 = { 가수이름: '아이유', 노래: '아이와 나의 바다' };
// Q3. member, days, started에 타입지정
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var 회원들 = [1, '2', 3];
var 옵젝 = { a: 'kim' };
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function X2(a) {
    return a * 2;
}
console.log(X2(5));
function X(b) {
}
// 위 코드에서 void는 실수로 뭔가를 return하는걸 사전에 막을 수 있음.
// ?연산자는 들어올수도 있다 ~ 라는 뜻이긴 한데,
// (b :number | undefined ) <= 이거랑 똑같음.
function 함수5(x) {
    if (typeof x === 'number') {
        console.log(x + 3);
    } // x의 타입이 숫자면.
    else {
        console.log('숫자가 아닙니다.');
    }
}
// 위 함수가 안되는 이유.
// String + number (가능)
// number + number (가능)
// 이외에는 불가능함.
// 그래서 if문 & Typeof문으로 Type Narrowing을 써야함.
function 내함수(x) {
    var arr = [];
    if (typeof x === "number") {
        arr[0] = x;
    }
    else {
    }
    // 주의 - if문 썼으면 끝까지 써야 안전함.
    // else, else if 안 쓰면 에러로 잡아줄 수도 있음.
    arr[1] = x; // assertion문법
    // 왼쪽에 있는 변수를 넘버로 써주세요 라는 뜻.
    // 용도 - 1. Narrowing할 때 씀.
    // 2. 타입을 a에서 b로 변경 X - Union type에서 씀.
    // 무슨 타입이 들어올지 100% 확신할 때 쓰는 것.
    // 그래서 대부분 첫번째 if문 방법을 많이 사용함.
    // arr[0] = x;
}
function 이름5(x) {
    if (x) {
        console.log('안녕하세요 ' + x);
    }
    else {
        console.log('입력이 안 됐습니다.');
    }
}
// void는 return이 없어야함.
function 자릿수세기(x) {
    if (typeof x == 'string') {
        return x.length;
    }
    else {
        return x.toString().length;
    }
}
function 결혼가능(money, house, charm) {
    var score = 0;
    score += money;
    if (house == true) {
        score += 500;
    }
    if (charm == '상') {
        score += 100;
    }
    if (score >= 600) {
        return '결혼 가능';
    }
}
console.log(100, true, '상');
var 소개 = { name: 'kim', age: 20 };
// type 키워드를 사용하는게 좋음.
