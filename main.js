var text = document.querySelector("h1");

var shakes = ["shake", "shake-slow", "shake-hard", "shake-horizontal", "shake-vertical", "shake-rotate", "shake-opacity", "shake-crazy", "shake-chunk"]

function rgbColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb("+r+", "+g+", "+b+")";
}

setInterval(function () {
    var textShadowColor = rgbColor();
    var newElements = document.querySelectorAll("h2");
    if (newElements) {
        newElements.forEach(function (currentElement) {
            currentElement.style.color = rgbColor();
            currentElement.style.textShadow = "-1px 0 " + textShadowColor +", 0 1px " + textShadowColor +", 1px 0 " +textShadowColor +", 0 -1px " + textShadowColor;
        })
    }
    text.style.color = rgbColor();
    text.style.textShadow = "-1px 0 " + textShadowColor +", 0 1px " + textShadowColor +", 1px 0 " +textShadowColor +", 0 -1px " + textShadowColor;
}, 1000)

document.querySelector("body").addEventListener("click", function (e) {
    var newElement = document.createElement("h2");
    var typeShake = shakes[Math.floor(Math.random() * shakes.length)];
    console.log(typeShake)
    newElement.style.position = "absolute";
    newElement.classList =  typeShake + " shake-constant";
    newElement.style.margin = "0px";
    newElement.style.left = (e.x - 3) + "px";
    newElement.style.top = (e.y - 5) + "px";
    newElement.innerHTML = "XD";

    document.querySelector("body").appendChild(newElement);
});