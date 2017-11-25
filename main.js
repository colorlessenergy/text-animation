var text = document.querySelector("h1");

function rgbColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb("+r+", "+g+", "+b+")";
}

setInterval(function () {
    var textShadowColor = rgbColor();
    text.style.color = rgbColor();
    text.style.textShadow = "-1px 0 " + textShadowColor +", 0 1px " + textShadowColor +", 1px 0 " +textShadowColor +", 0 -1px " + textShadowColor;
}, 1000)