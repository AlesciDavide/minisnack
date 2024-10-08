const lampOn = document.querySelector("#on");
const lampOff = document.querySelector("#off");
const buttonSwitch = document.querySelector("#switch");

buttonSwitch.innerHTML = "accendi";
buttonSwitch.addEventListener("click", function(){
    console.log(lampOff.classList, lampOn.classList);
    /* if(lampOff.classList == "active"){

        lampOff.classList.add("none");
        lampOff.classList.remove("active");
        lampOn.classList.add("active");
        lampOn.classList.remove("none");
        buttonSwitch.innerHTML = "spegni";

    }else{
        lampOff.classList.add("active");
        lampOff.classList.remove("none");
        lampOn.classList.add("none");
        lampOn.classList.remove("active");
        buttonSwitch.innerHTML = "accendi";
    } */

        lampOff.classList.toggle("none");
        lampOff.classList.toggle("active");
        lampOn.classList.toggle("active");
        lampOn.classList.toggle("none");
        buttonSwitch.innerHTML = buttonSwitch.innerHTML === "accendi" ? "spegni" : "accendi";


})