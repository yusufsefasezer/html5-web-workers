'use strict';

var workers, resultArea, numberOne, numberTwo = {};

function initElement() {
    resultArea = document.querySelector('#result-area');
    numberOne = document.querySelector('#numberOne');
    numberTwo = document.querySelector('#numberTwo');
}

function initEvent() {
    if (window.Worker == undefined)  // checks Worker support.
        return setMessage('Web Worker is not supported by your browser.');

    workers = new Worker('worker.js');
    workers.addEventListener('error', workerOnError);
    workers.addEventListener('message', workerOnMessage);
}

function setMessage(message) {
    resultArea.textContent = message;
}

function workerOnError(evt) {
    setMessage(evt.message);
}

function workerOnMessage(evt) {
    setMessage(evt.data);
}

function init() {
    initElement();
    initEvent();
}

function calculate(operator) {
    workers.postMessage([operator, numberOne.value, numberTwo.value]);
}

window.addEventListener('DOMContentLoaded', init);