const todoList = document.querySelector("#todo");
const todoTask = document.querySelector("#todo-task");
const send = document.querySelector("#send");

const arr = [localStorage.getItem("Tasks")];


todoList.append(arr)

console.log('[arr]', arr);
send.addEventListener("click" ,() => {
    const newVal = todoTask.value;


    arr.push(newVal);


    localStorage.setItem("Tasks" , arr.join(","))

    todoList.append(newVal)
})

