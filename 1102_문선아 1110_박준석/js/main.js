const b_left = window.screenX;
const b_top = window.screenY;
// 팝업창2 웹사이트 안쪽에서 열리도록 설계
let newWin = window.open("popup.html", "123", `width = 500, height = 300, left=${b_left + 100}, top = ${b_top + 100}`)


const popupId = document.getElementById("popupId");
const img = document.getElementById("img");
const popupClose = document.getElementById("close");

// 함수사용
window.onload = function () {
  popupId.style.display = 'block'; 
  img.src = '../image/image7.png'
  img.alt = 'popup';
  firstpage('m.html');
};


popupClose.onclick = function () {
  popupId.style.display = 'none';
};

// 제목과 메뉴 사진이 항상 보이도록 설계
function firstpage(page){
    document.getElementById('contentFrame').src = page;
}