window.onload = function () {
  let btn_no = document.querySelector(".btn__no");
  let btn_yes = document.querySelector(".btn__yes");
  let header = document.querySelector(".header");
  let mainHeader = document.querySelector(".shrek__main_header");
  let mainImage = document.querySelector(".shrek__main_image");
  let yesImage = document.querySelector(".shrek__yes_image");
  let timeoutHeader = document.querySelector(".shrek__no_timeout");
  let timeoutImage = document.querySelector(".shrek__no_image");
  let mainBody = document.querySelector(".body");

  let audio = new Audio("music/Careless_Whisper.mp3");

  let spaceWidth;
  let spaceHeight;

  function wasteTime() {
    header.style.display = "none";
    mainHeader.style.display = "none";
    mainImage.style.display = "none";
    timeoutHeader.style.display = "block";
    timeoutImage.style.display = "block";
    btn_yes.style.display = "none";
    btn_no.style.display = "none";
  }
  function clickYes() {
    header.style.display = "none";
    mainHeader.style.display = "block";
    mainImage.style.display = "none";
    yesImage.style.display = "block";
    btn_yes.style.display = "none";
    btn_no.style.display = "none";
  }
  function moveBtn() {
    btn_no.style.top = Math.round(Math.random() * spaceWidth) + "px";
    btn_no.style.left = Math.round(Math.random() * spaceHeight) + "px";
  }
  function initBtn() {
    spaceWidth = window.innerHeight - btn_no.offsetHeight;
    spaceHeight = window.innerWidth - btn_no.offsetWidth;

    btn_no.addEventListener("mouseover", moveBtn);
  }

  mainBody.onmouseover = function () {
    audio.play();
  };

  // 300000 is 5 minutes
  mainBody.onmosueover = function () {
    setTimeout(wasteTime, 300000);
  };
  btn_yes.addEventListener("click", clickYes);
  initBtn();
};
