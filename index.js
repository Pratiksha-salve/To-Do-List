const textArea = document.querySelector(".textarea");
const button = document.querySelector(".buttoninput");
const todolist = document.querySelector(".todolist")

button.addEventListener("click", addToDoListItem)

function addToDoListItem(){
    const ToDodiv = document.createElement("div");
    ToDodiv.classList.add("itemall") //added a class named itemall
    const item = document.createElement("p");
    item.innerHTML = textArea.value;
    item.classList.add("item");

    ToDodiv.appendChild(item);

    if(textArea.value== '') return; //no empty item can be added


    //creating a button to delete item
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = (`<i class="fa-solid fa-trash"></i>`)
    deleteButton.classList.add("trashbutton")

    ToDodiv.appendChild(deleteButton)
    console.log(ToDodiv)

    todolist.appendChild(ToDodiv); //added the div on page
    textArea.value = '';

}

todolist.addEventListener("click", deleteItem);

function deleteItem(e) {
    const item = e.target;
    console.log(item);

    if(item.classList[0] === "trashbutton") {
        const parent = item.parentElement;
        parent.remove();
    }
}