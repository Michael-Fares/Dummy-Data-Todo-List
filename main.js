// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}


const populateTodos = () => {
// iterate over the todo array but only display 20 todos at a time by dividing 200 by 10
for(i=0; i < (arrayOfTodos.length)/10; i++) {
// the list needed to be defined INSIDE the function in order for it to work
// create var called list to store the ol
const list = document.getElementById('todo-list')
// create an li element and store in the var listItem
const listItem = document.createElement('li')
// create a "floating?" text node that is equal to the title of the task the todo list and call it task
const task = document.createTextNode(arrayOfTodos[i].title)
// use the appendChild method to stick the text node to the li
listItem.appendChild(task)
//Use the append child method again to stick the li to the ol
list.appendChild(listItem)
// uncompleted items are red, completed items are blue and crossed out
if (arrayOfTodos[i].completed === false) {
  console.log(arrayOfTodos[i].id, "NOT FINISHED!")
  listItem.style.color = "tomato"
} else {
  listItem.style.color = "blue"
  listItem.style.textDecoration = "line-through"
}
}
}

