//Variables
const addBut = document.querySelector('.add-button');
let todoBox = document.querySelector('.todo-box');
const todoContainer = document.querySelector('.todo-container');



//Event Listeners
addBut.addEventListener('click', createTodo);
todoContainer.addEventListener('click', deleteCheck);



//Functions
function createTodo(event) {
    //Prevent the page from submitting
    event.preventDefault();
    //Creating LI
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoContainer.appendChild(todoItem);
    //Creating the Text
    const todoInput = document.createElement('p');
    todoInput.innerText = todoBox.value;
    todoInput.classList.add('todo-input');
    todoItem.appendChild(todoInput);
    //Clearing the input box
    todoBox.value = '';
    //Creating Check Button 
    const checkBut = document.createElement('button');
    checkBut.classList.add('check-button');
    checkBut.innerHTML = '<img src="img/icons/check.svg" >';
    todoItem.appendChild(checkBut);
    //Creating Trash Button
    const trashBut = document.createElement('button');
    trashBut.innerHTML = '<img src="img/icons/trash.svg" >';
    trashBut.classList.add('trash-button');
    todoItem.appendChild(trashBut);
}

function deleteCheck(e) {
    const item = e.target;
    //Delete TODO
    if (item.classList[0] === "trash-button") {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })

    }
    //Check TODO
    if (item.classList[0] === "check-button") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}