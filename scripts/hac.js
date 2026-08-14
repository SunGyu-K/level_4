//function.js
//1.내장함수
//alert('이 사이트는 포트폴리오용 사이트입니다.');
// const q1 = prompt('1+1?');
// alert('사용자가 입력한 답은'+q1+'입니다'); //사용자가 입력한 답은 ? 입니다.
//print();
const printBtn = document.querySelector('#print_Btn');
//v1. 사용자정의함수를 이벤트함수내에서 호출한 방식(2개 이상 반복일경우)
//printBtn.addEventListener('click',printFunc);

//v2. 이벤트함수addEventListener() 내에서 직접 사용자함수를 만드는 방식
//printBtn.addEventListener('click',function(){ print();} );

//v3. 내장함수에 함수명이 안들어가는데 function 키워드를 써야하는지 의문으로 생긴 새로운함수
//화살표 함수 => {2번 이상 반복되지 않을 때}
printBtn.addEventListener('click',()=>{ print(); });

const num1 = Math.random();//0~1랜덤한 숫자 생성 내장함수
const num2 = Math.floor(Math.random() * 10) + 1;
console.log(num1);
console.log(num2);

//사용자정의함수
function printFunc(){ print(); }

//3. 함수 스코프, 변수 범위
let b = 20; //전역
let c = 30; //전역

function test(){
    let a = 10;//함수 내부 지역변수
    return console.log(a+b); //ok
}
test();
//console.log(a); //error - 밖에서 불렀기에 오류
console.log(b+c); //ok


//4. 함수의 매개변수
//반복되는 함수 내에 달라지는 매개값이 있을 때 사용
//동화 : 헨젤과 그레텔이 집을 찾아오는 반복 방법
function story1(boy='헨젤', girl='그레텔', mapData){ //함수생성(매개변수생성)
    let person = ['헨젤','그레텔'];
    let result = person[0]+'과'+person[1]+'이 '+mapData+'을 따라 집을 찾아갔습니다.';
    //헨젤과 그레텔이 조약돌을 이용해 집을 찾아갔습니다.
    return console.log(result);
}
story1('봄', '여름', '조약돌'); // 함수호출(매개변수값 대입)
story1(undefined, undefined, '빵부스러기') // 함수호출(매개변수값 대입)

//동화2. story2 함수 생성, 매개변수 달라지는 데이터 기준으로 추가 생상(이름은 자유)
//나무꾼은 금도끼를 잃어버렸습니다.
//나무꾼은 쇠도끼를 잃어버렸습니다.
function story2(gold='금도끼', iron='쇠도끼', viewData){
    let wood = ['나무꾼','신령'];
    let reding = wood[0]+'은 '+wood[1]+'이 '+viewData+'를 주지않아 고소를 했어요.';
    return console.log(reding);
}
story2(); //매개변수 아무것도 안적었을 때 모두 기본값
story2('금도끼', '은도끼', '쇠도끼'); // 앞의 매개변수 정의안되서 기본값, 뒤 문자만 매개변수대입
story2(undefined, undefined, '금도끼'); //앞 매개변수 문자대입, 뒤 매개변수 안적어서 기본값 처리


//카페 키오스크
//아이스아메리카노 1잔 주문완료
//function 간편버전 => 이벤트 내에서 사용
function cafeKiosk(menu, number=1){
    const order = `${menu} ${number}잔 주문완료`;
    console.log(order);
}
cafeKiosk('아이스아메리카노');
cafeKiosk('카페라떼',2);

//ICE, HOT, 메뉴, 메뉴개수까지 선택가능한 함수 만들기
//출력 예) ICD 카페라떼 2잔 주문 완료
//출력 예) HOT 카페라떼 1잔 주문 완료
function cafeKiosk_v2(tem, me, num=1){
    const temperature = ['ICE', 'HOT'];
    const menu = ['아메리카노', '카페라떼', '녹차라떼', '초코라떼'];
    const order = `${temperature[tem]} ${menu[me]} ${num}잔 주문완료`
    return console.log(order);
}
cafeKiosk_v2(0,0,1);
cafeKiosk_v2(1,2,3);

//5. 함수 리턴
//함수 내부 실행 데이터를 사용자가 원하는 방식으로 출력되게 만드는 키워드
function japangi(drink, num=1){
    const order = `${drink} ${num}개 주문완료`;
    return order; // order 변수에 저장된 값만 함수 외부로 반환
    return; //리턴 뒤에 아무것도 안적으면 함수만 강제 종료
    return console.log('잔액이 부족합니다.'); // 리턴 뒤 콘솔실행하고 함수 종료
    console.log(order); // 리턴 아래 써있는 명령은 절대 실행안됨
}
japangi('생수'); //함수 내부 리턴에서 출력함수가 정해졌을 때 데이터만 전달방식
console.log(japangi('사이다')); // 함수 내부 리턴에서 출력함수가 정해지지 않고 데이터만 반환했을 때 함수 밖에서 출력함수를 정하는 방식
printBtn.textContent = japangi('콜라');