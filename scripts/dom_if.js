let a = 10;
let b = 20;

//a와 b변수의 값을 비교해서 조건 결과 테스트
//if(조건식){조건식이 참일 때 실행결과}
if(a != b){ console.log('a와 b가 다르면 참'); }
if(a == b){ console.log('a와 b가 다르면 참'); }

//2단 조건(if-else는 한 세트로 둘중 하나만 실행됨)
if(a < b){
    console.log('a가 b보다 작으면 참');
}else{
    console.log('a가 b보다 작지 않으면 거짓');
}

//인쇄 버튼 클릭 시 -> 인쇄하시겠습니까? 질문-> 확인(예) 누르면 인쇄실행
//인쇄 버튼 클릭 시 -> 인쇄하시겠습니까? 질문-> 취소(아니오) 누르면 아무것도 실행안함
const print_btn = document.querySelector('#print_btn');
print_btn.addEventListener('click',()=>{
    let printQ = confirm('인쇄하시겠습니까?');
    if(printQ == ture){ print(); }
})