//index.js
//1.변수
let itemPrice = 24600;
const titleBig = document.querySelector('h1')
const result1p = document.querySelector('.result1')
const result2p = document.querySelector('.result2')
let replacData = itemPrice.toLocaleString('ko-kr'); //데이터 종류 변경변수
//--------------------------------------연습(웹은행 150만원 입금)
let webBank = 1500000;
let replaceBank = webBank.toLocaleString('fi-fi');
//출력 테스트 콘솔
console.log(itemPrice, titleBig, result1p, replacData);
//실행 결과
result1p.textContent = replacData+'원';
result2p.textContent = replaceBank+'원';


//---------------------------------
//2. 배열 (통합이란 뜻)
const money = [24600, 32000, 19900];
const list1Li = document.querySelectorAll('.list1 > li') // querySelectorAll 단체로 묶는 용도

console.log(list1Li);
console.log(money[0].toLocaleString('ko-kr'));
console.log(money[1].toLocaleString('ko-kr'));
console.log(money[2].toLocaleString('ko-kr'));

list1Li[0].textContent = money[0]+'원';
list1Li[1].textContent = money[1]+'원';
list1Li[2].textContent = money[2]+'원';

list1Li[3].children[0].textContent = itemName[0];
list1Li[3].children[1].textContent = itmPriceOriginal[0];

//내가 한 부분
// const studY1 = document.querySelectorAll('.study > dt, dd')

// console.log(studY1);
// studY1[0].textContent = itemName[2];
// studY1[1].textContent = itmPriceOriginal[2];
// studY1[2].textContent = itemName[3];
// studY1[3].textContent = itmPriceOriginal[3];



const studyDt = document.querySelectorAll('.study > dt')
const studyDd = document.querySelectorAll('.study > dd')

console.log(studyDt,studyDd);
studyDt[0].textContent = itemName[2];
studyDd[0].textContent = itmPriceOriginal[2];
studyDt[1].textContent = itemName[3];
studyDd[1].textContent = itmPriceOriginal[3];

let foodTray = ['계란','스테이크','샐러드','김치','단무지','쌀밥','콩나물국'];
//계란, 콩나물국, 김치 출력
//스테이크 -> 연어로 변경
console.log(foodTray[0]); //계란
console.log(foodTray[6]); //콩나물국
console.log(foodTray[3]); //김치

foodTray[1] = '언어'; // 스테이크 제거 후 연어로 변경(신규목록으로 대입됨)
console.log(foodTray[1]); // 위 변경된 연어로 출력

// 3. 객체
// 객체는 이름표로 값을 구분한느 디저트 트레이라고 할수있음
// 속성(key) 디저트 트레이 각 층
// 값(balue) 트레이 안 실제 내용
// 속성(1단),값(마카롱)
// 속성(2단),값(빵, 머핀, 에그타르트)
// 속성(3단),값(방울토마토,청포도,오렌지)

// 형식상으로 예시 ( 1단에 있는 마카롱을 꺼낸다 )

// 객체명 = { 속성:값,속성:값 } 객체생성하기
// 객체명.속성; 원하는 객체로 불러오기

const movie = { //객체변수 == 줄여서 객체
    name:'스파이더맨', //속성:값, 구조로 작성
    price:12000,
}
console.log(movie.name); //객체,속성
console.log(movie.price);

//-------------------------객체+cgv  DB연결
const cgv = document.querySelector('.cgv');
const cgvPoster = cgv.querySelector('img');
const cgvTitle = cgv.querySelector('h2');
const cgvAge = cgv.querySelector('.age');
const cgvRate = cgv.querySelector('.rate');
const cgvGenre = cgv.querySelector('.genre');

console.log(cgv,cgvPoster,cgvTitle,cgvAge,cgvRate,cgvGenre);

cgvPoster.src = movieDb[0].poster;
cgvTitle.textContent = movieDb[0].name;
cgvAge.textContent = movieDb[0].age+'세 이용가';
cgvRate.textContent = movieDb[0].reservation_rate;
cgvGenre.textContent = movieDb[0].genre;

//------------------- 객체변수 연습

const dessertTray = {
    top:['파랑마카롱','분홍마카롱','초록마카롱','노랑마카롱'],
    middle:['슈크림','머핀','에그타르트'],
    bottem:['방울토마토','청포도','오렌지'],
}
console.log(dessertTray); // 본체 검사
console.log(dessertTray.top[3]) // 탑 목록
console.log(dessertTray.middle[0]) //미드 목록
console.log(dessertTray.bottem[1]) //바텀 목록


dessertTray.bottem[2] = '망고'; // bottem 목록에서 2목록을 망고로 변경
console.log(dessertTray.bottem[2]); //변경된 망고 출력

//------------------------------------------------------ 증감연산자
let num = 1;
console.log(num); //1(변수가 처음 대입된 값 테스트)
num++; // num 수를 증가한다.
console.log(num); //2 (위 연산 후 실행 테스트)
num--; // num 수를 감소시칸다.
console.log(num); //1 (변수가 마지막으로 대입된 값 테스트)

//-------------------------------------- 증감연산자, 2개의 변수 활용
let number1 = 10;
let number2;

console.log(number1,number2); //초기값 테스트

numver2 = number1++;
// 증감연사자를 변수 뒤에 붙이면
// 기존 변수값(number1)을 대입(=)을 만나 number2로 먼저 보내고
// ==로 number1을 나중에 증가시킨다(후처리)
console.log(number1,number2);
