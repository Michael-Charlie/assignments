function getData(){
    axios.get("https://api.vschool.io/michaelcharlie/todo")
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}


function listData(data){
    clearList()
    
    for(let i = 0; i < data.length; i++){
        console.log(data[i])
        const item = document.createElement('h2')

        const prc = document.createElement('h3')

        const desc = document.createElement('h3')

        const img = document.createElement('img')
        img.src = data[i].imgUrl
        img.style.width = "200px"
        
        const div = document.createElement('div')
        div.setAttribute("id", `${i}`)

        const checkBox = document.createElement('input')
        checkBox.setAttribute("type", "checkbox")
        if (data[i].completed === true){
            item.style.textDecoration = "line-through"
            prc.style.textDecoration = "line-through"
            desc.style.textDecoration = "line-through"
            checkBox.checked = true
        }

        checkBox.addEventListener("click", function (e){
            e.preventDefault()
            const updates = {
                completed: !data[i].completed
            }
           
            axios.put("https://api.vschool.io/michaelcharlie/todo/" +  data[i]._id, updates)
            .then(response => listData(response.data))
            .then(() => getData())
            .catch(err => console.log(err))
        })

        const dlte = document.createElement('button')
        dlte.textContent = "Delete"
        dlte.addEventListener("click", function (){
            axios.delete("https://api.vschool.io/michaelcharlie/todo/" +  data[i]._id)
            .then(response => listData(response.data))
            .then(() => getData())
            .catch(err => console.log(err))
        })
            
        item.textContent = data[i].title
        prc.textContent = data[i].price
        desc.textContent = data[i].description
        img.textContent = data[i].imgUrl

        div.appendChild(item)
        div.appendChild(prc)
        div.appendChild(desc)
        div.appendChild(img)
        div.appendChild(checkBox)
        div.appendChild(dlte)
        document.getElementById('todo-list').appendChild(div)
    }
}

getData()

const todoForm = document["todo-form"]


todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.imgUrl.value = ""
    
    axios.post("https://api.vschool.io/michaelcharlie/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})



function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}