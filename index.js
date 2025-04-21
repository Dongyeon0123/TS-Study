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
