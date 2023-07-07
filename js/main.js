console.log("JS file included")

const title = document.querySelector("h1")

title.addEventListener("click", function() {
    // console.log(this) may not work in responsive view in inspect
    this.style.color = "darkgreen"
})