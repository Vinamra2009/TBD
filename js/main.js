var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 100) {
    document.getElementById("header").classList.add("header-scrolled");
  } else {
    document.getElementById("header").classList.remove("header-scrolled");
  }
  // prevScrollpos = currentScrollPos;
}

