console.log("JS file included")

const title = document.querySelector("h1")

title.addEventListener("click", function() {
    // console.log(this) may not work in responsive view in inspect
    this.style.color = "darkgreen"
})

const like = document.getElementById("like")

like.addEventListener('click', function(e) {
    e.target.classList.toggle("liked")
})

//multiple element eventlistener
//need children to catch every element under the "todolist" id
const tasks = document.getElementById("todolist").children

for(const task of tasks) {
    task.addEventListener("click", completetask)
}

//event will not work if they have several class inside-because it is only target on one class
function completetask(e) {
    e.target.classList.toggle("done")
}
