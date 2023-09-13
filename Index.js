let todo = document.getElementById ("ToDo")
todo.addEventListener("submit", function(e){
e.preventDefault()
const thingTodo = document.getElementById("thingtodo")
console.log (thingTodo.value)

const newTodo = document.createElement("div")
newTodo.classList.add("things-todo")
newTodo.innerHTML = `
<p style="display: inline;">${thingTodo.value}</p>
<button class="line" ><i class="fas fa-check"></i></button> <button onclick="deleteone(event)"> <i  onclick="deleteone(event)" class="fas fa-trash"></i> </button>`

const sectionList = document.getElementById("list")
sectionList.appendChild(newTodo)

thingTodo.value = ``
})
const deleteone = function(e){
    const clickedButton =e.target
    clickedButton.parentElement.remove()
}