/* selezioni gli elementi */
const colonnaEl = document.querySelectorAll(".colonna");
const taskEl = document.querySelectorAll(".task");

/* foreach per prendere tutti gli elementi del querySelectorAll */
taskEl.forEach(task =>{
    task.addEventListener("dragstart", dragStart);
    
    task.addEventListener("dragend", dragEnd);
});




/* funzioni */

function dragStart(){
    console.log("dragStart");
};

function dragEnd(){
    console.log("dragEnd");
};