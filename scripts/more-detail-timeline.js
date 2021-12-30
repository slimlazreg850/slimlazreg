function closeDiv() {
  var x = event.target;
  parentDiv = x.parentElement;
  parentCard = parentDiv.parentElement

  if (parentCard.style.display === "none") {
    parentCard.style.display = "block";
  } else {
    parentCard.style.display = "none";
  }
}

function moreDetailsBacS() {
  var x = document.getElementById("bacS");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function moreDetailsDUT() {
  var x = document.getElementById("dutInfo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function moreDetailsLicence() {
  var x = document.getElementById("licence-infocom");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function moreDetailsMaster() {
  var x = document.getElementById("master-dedi");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}