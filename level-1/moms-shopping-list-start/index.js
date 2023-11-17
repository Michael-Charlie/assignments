const form = document.addItem

// define unordered list
const list = document.getElementById("list")

form.addEventListener("submit", function(event){
    event.preventDefault()

    const title = form.title.value
    createNewItem(title)
    form.title.value = ""
})


function createNewItem(string){
    const listItem = document.createElement("li")
    
    const div = document.createElement("div")
    
    const editBtn = document.createElement("button")
    editBtn.textContent = "edit"

    listItem.append(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
        deleteBtn.addEventListener("click", function() {
        listItem.remove()
    })
    listItem.append(deleteBtn)

    div.textContent = string

    list.append(listItem)

    listItem.append(div)

}


// write function to edit (pass as a callback function to edit button event listener)
function editItem(){
    const edit = form.edit.value
    form.edit.value = ""
}
//write function to delete
function deleteItem(){
    const deleteItm = form.deleteItm.value
    form.deleteItm.value = ""
    deleteItem.append(deleteBtn)
}