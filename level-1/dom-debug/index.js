const colors = ["select an option", "red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }

    var red = colors[1]
    var blue = colors[2]
    var green = colors[3]

    dropDown.addEventListener("change", function(e){
        // console.log(e.target.parentElement, "test")
        const subItem = e.target.parentElement

        if(e.target.value === red) {
            subItem.style.backgroundColor = "red"
        }else if(e.target.value === blue){
            subItem.style.backgroundColor = "blue"
        }else if(e.target.value === green){
            subItem.style.backgroundColor = "green"
        }
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue.value
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


