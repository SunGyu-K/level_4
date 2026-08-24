//class_ll2.js



//css 2개 이상의 속성을 반복사용 사용 시
//css파일에서 별도의 클래스 준비->불러오기
//객체.classList.함수('적용할클래스명')
//함수종류 : add , remove, toggle, replace

const pTag = document.querySelector('p');
const btn1 = document.querySelector('#btn1');
const userIdInput = document.querySelector('#user_id');
console.log(pTag,btn1);

btn1.addEventListener('click',()=>{
    //아이디를 입력안하고 버튼 클릭 시 ->아이디 입력 오류 출력
    //아이디 입력하고 버튼 클릭 시 -> 결과없음
    //조건식) 아이디(입력값)를 입력했는가? 참/거짓
    console.log(userIdInput.value) //값 테스트
    console.log(Boolean(userIdInput.value)); //논리 테스트
    if(userIdInput.value == ''){
        pTag.classList.add('error');
        pTag.innerHTML = '<em>로그인</em>이 실패했습니다';
    }
    else{/* (앞) 조건이 거짓일때 실행결과 */
        pTag.classList.add('error');
        pTag.innerHTML = '<em>로그인</em>이 성공하셨습니다';
    }
    //if(userIdInput.value != ''){
    // if(Boolean(userIdInput.value)){
    //     pTag.classList.add('error');
    //     pTag.innerHTML = '<em>로그인</em>이 성공하셨습니다';
    // }
    //pTag.classList.add('error');
    //pTag.innerHTML = '<em>로그인</em>이 실패했습니다';
    //pTag.textContent = '<em>로그인</em>이 실패했습니다';
    //pTag.classList.toggle('error');
})