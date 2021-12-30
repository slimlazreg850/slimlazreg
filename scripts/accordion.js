var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// function getDiv(str){
//   var getDiv = document.getElementById(str);
//   console.log(getDiv);
//   openModal(getDiv);
// }


function openModal(obj) {
  document.getElementById(obj).style.display = "block";
  currentModal = obj;
  // delete main scroll bar
  var $body = $(document.body);
  var oldWidth = $body.innerWidth();
  $body.css("overflow", "hidden");
  $body.css("overflow-y", "hidden");
  $body.width(oldWidth);
}

function closeModal(obj) {
  document.getElementById(obj).style.display = "none";

  // main scroll bar on
  var $body = $(document.body);
  $body.css("overflow", "auto");
  $body.css("overflow-y", "scroll");
  $body.width("auto");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var endClass = currentModal.split("-")[1];
  var newDemo = "demo" + endClass;
  var newCaption = "caption" + endClass;
  var newSubText = "subtexTitle" + endClass;

  var i;
  var slides = document.getElementsByClassName(currentModal);
  var dots = document.getElementsByClassName(newDemo);
  var captionText = document.getElementById(newCaption);

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;

  // before | is the title
  // after | is the description
  var myStr = captionText.innerHTML;
  var firstWord = myStr.split("|")[0];
  var subtitle = myStr.substr(myStr.indexOf("|") +1);

  document.getElementById(newCaption).innerHTML = firstWord;
  document.getElementById(newSubText).innerHTML = subtitle;

}