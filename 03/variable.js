//javascript 유연 -??! 기반이 약하다라는 뜻
'use strict'; //-> 오류를 발견하기 좋다

//2. Variable
// let - 변수선언!

let go = "gogo";
{
    let name = 'ellie';
    console.log("IZONE");
    name = 'hello';
    console.log(name);
}
console.log(name); // 중괄호 내부에 선언되서 여기서는 안보임;;
console.log(go)

// var - 죽어버린 구시대의 산물
// var hoisting - 선언을 어디했냐 상관없이 가장위에 선언하는것을 의미!
// var - has no block scope
{
    age= 4;
    var age;
}
console.log(age) // -> 띠용 가뒀는데 밖에서됨 그냥 중괄호로 가두기가 불가!
// 결국 그냥 버려! 무조건 let

//3. constants - immutable data type

//4. variable types
// number - java c 와는 다르게 그저 number 하나로 마무리 혹은 let 으로도 가능

const infinity = 1/0;
const negativeinfinity= -1/0;
const nAn = '숫자가아닌것' / 2;
console.log(infinity)
console.log(negativeinfinity)
console.log(nAn)

//String
const char = 'c';
const IZONE = 'IZONE';
const greeting = '3333333'
const galaxy= `hi ${IZONE}!`
console.log(`value : ${greeting}, type: ${typeof greeting}`);
console.log('value: ' + galaxy + ' type: ' + typeof galaxy)
console.log(`value : ${galaxy}, type : ${typeof IZONE}`)
// 원래라면 위위의 것처럼할것을 바로위꺼로 단순하게 코드가 줄어듬

// boolean
// false: 0, null, undefined, NaN, ''
// true = 그냥 나머지

//object
const IZ = {name : 'IZONE', age: 1}
IZ.age = 23;
console.log(IZ)
// const란 변수는 사실 변경이 안되지만 변수 안에서 나머지 구성요소들을 바꿀순있음!

