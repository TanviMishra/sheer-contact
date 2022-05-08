// var folder = "assets/images/appendix/";
var xhr = new XMLHttpRequest();
let appendixContainer = document.querySelector("#appendixContainer");
xhr.open("GET", "/assets/images/appendix", true);
xhr.responseType = "document";
xhr.onload = () => {
  if (xhr.status === 200) {
    var elements = xhr.response.getElementsByTagName("a");
    for (x of elements) {
      if (x.href.match(/\.(jpe?g|png|gif)$/)) {
        let img = document.createElement("img");
        img.src = x.href;
        appendixContainer.appendChild(img);
      }
    }
  } else {
    alert("Request failed. Returned status of " + xhr.status);
  }
};
xhr.send();
