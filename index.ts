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