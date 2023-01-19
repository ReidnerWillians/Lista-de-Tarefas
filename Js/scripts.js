// função que adiciona tarefa

    function addTask(){

        const taskTitle = document.querySelector("#task-title").value;

                       
            if(taskTitle){
                const template = document.querySelector(".template"); //clonando template
                const newTask = template.cloneNode(true); 
                newTask.querySelector(".task-title").textContent = taskTitle; // adicionando título
                newTask.classList.remove("template"); // remover listas desnecessárias
                newTask.classList.remove("hide");
                const list = document.querySelector("#task-list"); // adicionar tarefa na lista
                list.appendChild(newTask);
                const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
                    removeTask(this);
                });

                const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
                    completeTask(this);
                });

                document.querySelector("#task-title").value = ""; // limpando texto


            }

    }

function removeTask(task){
    
    task.parentNode.remove(true);
}

function completeTask(task){

    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}

//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){

    e.preventDefault();

    addTask();

});