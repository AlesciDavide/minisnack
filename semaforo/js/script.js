const rosso = document.querySelector(".rosso");
const giallo = document.querySelector(".giallo");
const verde = document.querySelector(".verde");
const root = document.documentElement;
const bottone = document.querySelector("#button");


const semaforoRossoOn = getComputedStyle(root).getPropertyValue("--sem-color-rosso-on");
rosso.style.backgroundColor = semaforoRossoOn;


const semaforoGialloOff = getComputedStyle(root).getPropertyValue("--sem-color-giallo-off");
giallo.style.backgroundColor = semaforoGialloOff;


const semaforoVerdeOff = getComputedStyle(root).getPropertyValue("--sem-color-verde-off");
verde.style.backgroundColor = semaforoVerdeOff;

    bottone.addEventListener("click", function(){
        setTimeout(() => {
            /* trasformo il rosso in spento */
            const semaforoRossoOff = getComputedStyle(root).getPropertyValue("--sem-color-rosso-off");
            rosso.style.backgroundColor = semaforoRossoOff;
            /* attivo il verde */
            const semaforoVerdeOn = getComputedStyle(root).getPropertyValue("--sem-color-verde-on");
            verde.style.backgroundColor = semaforoVerdeOn;
    
            setTimeout(() => {
                    /* spengo il verde */
                    const semaforoVerdeOff = getComputedStyle(root).getPropertyValue("--sem-color-verde-off");
                    verde.style.backgroundColor = semaforoVerdeOff;
                    /* attivo il giallo */
                    const semaforoGialloOn = getComputedStyle(root).getPropertyValue("--sem-color-giallo-on");
                    giallo.style.backgroundColor = semaforoGialloOn;
    
                    setTimeout(() => {
                        /* spengo il giallo */
                        const semaforoGialloOff = getComputedStyle(root).getPropertyValue("--sem-color-giallo-off");
                        giallo.style.backgroundColor = semaforoGialloOff;
                        /* attivo il rosso */
                        const semaforoRossoOn = getComputedStyle(root).getPropertyValue("--sem-color-rosso-on");
                        rosso.style.backgroundColor = semaforoRossoOn;
                    }, 4000);   
            }, 3000);
    
    
        }, 3000);

    })


    
