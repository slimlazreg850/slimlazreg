function createImage(src, alt) {
    var z = document.getElementById('wrapper-FullScrenImg');
    z.innerHTML = '';
    var x = document.createElement("IMG");
    x.setAttribute("src", src);
    x.setAttribute("alt", alt);
    x.setAttribute("id", "currentImage");
    x.classList.add("fullScreen-img");
    document.getElementById("wrapper-FullScrenImg").appendChild(x);

    var myStr = document.getElementById("currentImage").alt;
    // var myStr = alt.innerHTML;
    // console.log(myStr);
    var firstWord = myStr.split("|")[0];
    var subtitle = myStr.substr(myStr.indexOf("|") +1);
  
    document.getElementById('title').innerHTML = firstWord;
    document.getElementById('subtitle').innerHTML = subtitle;
}

function setActive(element) {

    Array.from(document.querySelectorAll('.thumbnail-imgs')).forEach((el) => el.classList.remove('active'));

    if (element.classList.contains("active")) {
        element.classList.remove("active");
    }
    else {
        element.classList.add("active");
    }

}