/* selezioni gli elementi */
const colonneEl = document.querySelectorAll(".colonna");
const taskEl = document.querySelectorAll(".task");
let dragEl = null;
let dragData = null;

const dataList = [
    {
        id: 0,
        nome: "In coda",
        tasks: [
            {
                id: 0,
                testo: "Abilita il drag and drop",
            },
            {
                id: 1,
                testo: "Controlla se funziona bene",
            },
            {
                id: 2,
                testo: "Salvale in cache (successivamente salvarle in db)",
            },
        ]
    },
    {
        id: 1,
        nome: "Aperto",
        tasks: [ {
            id: 0,
            testo: "prova id",
        },]
    },
    {
        id: 2,
        nome: "In revisione",
        tasks: []
    },
    {
        id: 3,
        nome: "chiuso",
        tasks: []
    },
]



/* genero le task partendo da dataList per poi poterlo sostituire con una chiamata api per il db per permettere di salvare i dati in modo permanente*/


taskGenerate();

/* foreach per prendere tutti gli elementi del querySelectorAll */

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
    const indexColonna = dataList.findIndex(colonna =>{
        return colonna.id == this.parentElement.getAttribute("data-colonna");
    })
    const indexTask = dataList[indexColonna].tasks.findIndex(task =>{
        return task.id == this.getAttribute("data-task");
    })

    dragData = dataList[indexColonna].tasks.splice(indexTask, 1);
};

function dragEnd(){
    console.log("dragEnd");
    dragEl.style.display = "block"
    dragEl = null;

    dataList[this.parentElement.getAttribute("data-colonna")].tasks.push(dragData);
    console.log(dataList, dragData);
    
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

/* funzioni per generare le task dall'array dataList */
function taskGenerate(){
    dataList.forEach(colonna =>{
        const colonnaSelezionata = document.querySelector(`[data-colonna= '${colonna.id}']`)
        colonna.tasks.forEach(task =>{
            const elemento = document.createElement("div");
            elemento.classList.add("task");
            elemento.setAttribute("draggable", true);
            elemento.setAttribute("data-task", task.id);
            console.log(task.testo);
            
            const text = document.createTextNode(task.testo);
            
            elemento.appendChild(text);
            colonnaSelezionata.appendChild(elemento);

            elemento.addEventListener("dragstart", dragStart);
    
            elemento.addEventListener("dragend", dragEnd);
        });
    });
};


