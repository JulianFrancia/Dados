'use strict';

let count;
let textResult;
let facesCube = {
    1 : 'face-one',
    2 : 'face-two',
    3 : 'face-three',
    4 : 'face-four',
    5 : 'face-five',
    6 : 'face-six'
}

window.onload = () => {
    textResult = document.getElementById('result');
    count = 0;
    let titleBox = document.getElementById('title-box');
    titleBox.classList.add('animated-title-box');
    let buttonBox = document.getElementById('button-box');
    buttonBox.classList.add('button-box-animated');
    let cubeBox = document.getElementById('cube-box');
    cubeBox.classList.add('cube-box-animated');
}

function makeMessage(value) {
    return `Salió ${value}, si no tenias ganas de que salga eso, presioná en "Desver que onda" para volver a tirar`
}


function roll() {
    let cube = document.getElementById('cube');
    let randomValue = Math.floor(Math.random()*(6-1+1)+1);
    count++;
    if(count === 1) {
        const SHOWFACE = facesCube[randomValue];
        cube.classList.add(SHOWFACE);
        textResult.classList.remove('none');
        textResult.innerHTML = makeMessage(randomValue);
    }
}

function restart() {
    if(count > 0) {
        count = 0;
        cube.classList.remove(cube.classList[1]);
        textResult.classList.add('none')
    }
}