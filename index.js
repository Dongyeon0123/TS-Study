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
