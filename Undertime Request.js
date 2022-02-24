const nameInput = document.querySelector("#name");
const employeeId = document.querySelector("#employeeId");
const Time = document.querySelector("#Time");
const reasons = document.querySelector("#reasons");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function validateForm(){

    clearMessages();

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
    }

    if(!IDIsValid(employeeId.value)){
        errorNodes[1].innerText = "Employee ID is invalid";
        employeeId.classList.add("error-border");
    }

    if(reasons.value.length < 1){
        errorNodes[3].innerText = "Required to fill out";
        reasons.classList.add("error-border");
    }
   
}

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText ="";


    }
    nameInput.classList.remove("error-border")
    employeeId.classList.remove("error-border")
    reasons.classList.remove("error-border")

}

function IDIsValid(employeeId){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(employeeId);
}