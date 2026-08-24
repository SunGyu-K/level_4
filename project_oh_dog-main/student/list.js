// 오늘의 집 클론코딩 프로젝트 - 쇼핑몰 상품 주문영역 + 상세페이지
//------------------------------------------------------------
//small1 == b1g1
//small2 == big2
//1.---------------------------변수
const smallThum = document.querySelectorAll('.small_thum img');
const bigThum = document.querySelectorAll('.big_thum img');
console.log(smallThum,bigThum);

//2.---------------------------함수


//3.---------------------------이벤트
smallThum[0].addEventListener('mouseover',()=>{
    bigThum.src = smallThum[0].src;
})
smallThum[1].addEventListener('mouseover',()=>{
    bigThum.src = smallThum[1].src;
})