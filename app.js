var list = document.getElementById("list");

9
function addTodo(){
    var todo_item = document.getElementById("todo-item")

    //create li tag 
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    //create delect buttn 
    var deltbtn = document.createElement("button")
    var delText = document.createTextNode("Delect Task")
    deltbtn.setAttribute("class","btn")
    deltbtn.setAttribute("onclick","delectItem(this)")
    deltbtn.appendChild(delText)


    // create edit btn
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit Task")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")

    li.appendChild(deltbtn)
    li.appendChild(editBtn)



    list.appendChild(li)


    todo_item.value =""
    // console.log(li)
}

function delectItem(h){
    h.parentNode.remove()
   
}

function editItem(h){
    var val = prompt("Edit Task",h.parentNode.firstchild.nodeValue)
    h.parentNode.firstchild.nodeValue = val;
}

function Deleteall(){
    list.innerHTML =""
}