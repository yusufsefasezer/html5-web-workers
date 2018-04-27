"use strict";
var workers, resultArea, numberOne, numberTwo;

function initialize() {
    resultArea = document.querySelector("#result-area");
    numberOne = document.querySelector("#numberOne");
    numberTwo = document.querySelector("#numberTwo");

    if (window.Worker) {
        workers = new Worker("worker.js");
    }

    workers.onerror = function (evt) {
        resultArea.innerHTML = evt.message;
    }

    workers.onmessage = function (evt) {
        resultArea.innerHTML = evt.data;
    }
}

function doIt(operator) {

    workers.postMessage([operator, numberOne.value, numberTwo.value]);

}

window.onload = initialize;