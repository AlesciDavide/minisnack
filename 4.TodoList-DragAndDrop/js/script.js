/* selezioni gli elementi */
const colonneEl = document.querySelectorAll(".colonna");
const taskEl = document.querySelectorAll(".task");
let dragEl = null;

/* foreach per prendere tutti gli elementi del querySelectorAll */
taskEl.forEach(task =>{
    task.addEventListener("dragstart", dragStart);
    
    task.addEventListener("dragend", dragEnd);
});
colonneEl.forEach(colonne => {
    colonne.addEventListener("dragover", dragOver);
    colonne.addEventListener("dragenter", dragEnter);
    colonne.addEventListener("dragleave", dragLeave);
    colonne.addEventListener("drop", dragDrop);
});




/* funzioni task */

function dragStart(){
    console.log("dragStart");
    setTimeout(() => {
        this.style.display = "none"
    }, 0);
    dragEl = this;
};

function dragEnd(){
    console.log("dragEnd");
};

/* funzioni colonne */

function dragOver(event){
    event.preventDefault();
    console.log("dragOver");
};

function dragEnter(){
    console.log("dragEnter");
};

function dragLeave(){
    console.log("dragLeave");
};

function dragDrop(){
    console.log("dragDrop");
    this.append(dragEl);
};