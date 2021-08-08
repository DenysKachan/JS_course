"use strict";

function clickPlus() {
    let inputFirstNumber = +document.getElementById("input1").value;
    let inputSecondNumber = +document.getElementById("input2").value;
    if (
        isNaN(inputFirstNumber) ||
        isNaN(inputSecondNumber) ||
        inputFirstNumber == null ||
        inputSecondNumber == null ||
        inputFirstNumber == "" ||
        inputSecondNumber == ""
    ) {
        alert("Error");
    } else {
        alert(inputFirstNumber + inputSecondNumber);
    }
}

function clickMinus() {
    let inputFirstNumber = +document.getElementById("input1").value;
    let inputSecondNumber = +document.getElementById("input2").value;
    if (
        isNaN(inputFirstNumber) ||
        isNaN(inputSecondNumber) ||
        inputFirstNumber == null ||
        inputSecondNumber == null ||
        inputFirstNumber == "" ||
        inputSecondNumber == ""
    ) {
        alert("Error");
    } else {
        alert(inputFirstNumber - inputSecondNumber);
    }
}
