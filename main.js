let btn_no = document.querySelector("btn__no");
let screenWidth;
let screenHeight;

function initNoBtn() {
  spaceWidth = document.body.offsetHeight - parseInt(btn_no.style.hieght);
  spaceHeight = document.body.offsetWidth - parseInt(btn_no.style.width);
}
