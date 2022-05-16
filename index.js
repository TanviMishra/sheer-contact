// var folder = "assets/images/appendix/";
var xhr = new XMLHttpRequest();
let appendixContainer = document.querySelector("#appendixContainer");
xhr.open("GET", "./assets/images/appendix", true);
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

// document.addEventListener("DOMContentLoaded", function () {
//   // JavaScript
//   let images = document.querySelectorAll("img");
//   function imageEnlarge() {
//     for (i = 0; i < images.length; i++) {
//       elem = images[i];
//       console.log("click added");
//       elem.addEventListener("click", function () {
//         // elem.classList.toggle("enlarged");
//         elem.style.transform = "scale(2)";
//         console.log(elem);
//       });
//     }
//   }
//   imageEnlarge();
// });

let body = document.querySelector("body");
let particle = document.querySelector("#particle");
particle.style.left = "100px";
particle.style.top = "100px";
body.addEventListener("click", (elem) => {
  let marginTop = window.innerHeight * Math.random(0, 1);
  let marginLeft = window.innerWidth * Math.random(0, 1);
  particle.style.left = marginLeft + "px";
  particle.style.top = marginTop + "px";
  particle.classList.add("transition");
});
