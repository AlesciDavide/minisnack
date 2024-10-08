const lampOn = document.querySelector("#on");
const lampOff = document.querySelector("#off");
const buttonSwitch = document.querySelector("#switch");

buttonSwitch.innerHTML = "accendi";

buttonSwitch.addEventListener("click", function(){
    console.log(lampOff.classList, lampOn.classList);

        lampOff.classList.toggle("none");
        lampOff.classList.toggle("active");
        lampOn.classList.toggle("active");
        lampOn.classList.toggle("none");
        buttonSwitch.innerHTML = buttonSwitch.innerHTML === "accendi" ? "spegni" : "accendi";


})