import addingTask from "./tasks";
const dialog=document.getElementById("task-dialog");
const addTaskBtn = document.getElementById("add-task");
addTaskBtn.addEventListener("click",()=>{
    dialog.showModal();
})
const confirmBtn =document.getElementById("confirm");

const cancelBtn =document.getElementById("cancel");

cancelBtn.addEventListener("click",()=>{
    dialog.close();
})

confirmBtn.addEventListener("click",()=>{
    dialog.close();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate =  document.getElementById("due-date"). value;
    const priority = document.getElementById("priority").value;

    if(title && description && dueDate && priority ){
        addingTask(title,description,dueDate,priority);
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        document.getElementById("due-date").value = "";
        document.getElementById("priority").value = "";
    }
})

export {addTaskBtn,cancelBtn,confirmBtn};