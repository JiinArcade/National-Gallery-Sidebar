// const 는 변수, 담을 수 있는 박스
// 자바스크립트의 변수법은 낙타표기법으로 작성한다.
// (단어가 바뀔때는 대문자로, 어떤 단어든 상관없음)
// sidebarMenuButton은 비어있는 박스. 오른쪽에 쓰는 것을 담는다.

const sidebarMenuButton = document.querySelector('.gnb-icon-button');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.overlay');

// 잘되었는지 확인하는 법 . 변수를 담아준다.
console.log(sidebarMenuButton, sidebar, sidebarOverlay) 

// 함수
function openSidebar() {
  // 하고싶은 일을 코드로 작성
  // sidebar 와 overlay가 보이게 하고 싶음
  // is-active라는 클래스가 추가되면 보이고 제거되면 사라진다
  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');
}

sidebarMenuButton.addEventListener('click', openSidebar);


function closeSidebar() {
  // overlay를 클릭했을 때 is-active라는 클래스를 제거
  sidebar.classList.remove('is-active');
  sidebarOverlay.classList.remove('is-active');
}

sidebarOverlay.addEventListener('click', closeSidebar);