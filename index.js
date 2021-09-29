const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes =[2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click", function vaidateBillAndCashAmount() {
    hideMessage();
    

if(billAmount.value > 0) {
    if(cashGiven.value >= billAmount.value){
         const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturned);


    }else{
        showMessage("The cash provided should atleast be equal to the bill amount");
    }

}else{
    showMessage("Invalid bill amount");
}

}); 
function calculateChange(amountToBeReturned){
    for (let i =0; i < availableNotes.length; i++) {
        const numberofNotes = Math.trunc
        (amountToBeReturned/availableNotes[0]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberofNotes;
    }
}

function hideMessage(){
    message.style.display="none"; 
}
function showMessage(msg) {
    message.style.display ="block"; 
    message.innerText = msg;
}

