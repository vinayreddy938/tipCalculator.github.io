let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let isCalculate = true;

function calculateButton() {
    // let amount = parseInt(billAmount.value);
    // let percentage = parseInt(percentageTip.value);
    if (isCalculate === true) {
        if (billAmount.value === "") {
            document.getElementById("errorMessage").textContent = "Please Enter a Valid Input";
        } else if (percentageTip.value === "") {
            document.getElementById("errorMessage").textContent = "Please Enter a Valid Input";
        } else {
            let amount = parseInt(billAmount.value);
            let percentage = parseInt(percentageTip.value);
            let totalTip = amount * percentage / 100;
            document.getElementById("tipAmount").value = totalTip;
            let totalAmount = amount + totalTip;
            document.getElementById("totalAmount").value = totalAmount;
            document.getElementById("errorMessage").textContent = "";
        }

    }
}