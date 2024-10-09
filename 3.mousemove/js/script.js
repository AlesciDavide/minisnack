const container = document.querySelector(".container");

const image = document.querySelectorAll(".image");

container.addEventListener("mousemove", function(event){
    image.forEach(elem => {
        const speed = parseFloat(elem.getAttribute("position-speed"));
        const x = event.pageX * speed / 10;
        const y = event.pageY * speed / 10;
        
        elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });

})