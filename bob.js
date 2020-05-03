window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("bot").style.padding = "30px 10px";
    document.getElementsByClassName("bot1").style.fontSize = "25px";
  } else {
    document.getElementsByClassName("bot").style.padding = "80px 10px";
    document.getElementsByClassName("bot1").style.fontSize = "35px";
  }
}
