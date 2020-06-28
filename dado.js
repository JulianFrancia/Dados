'use strict';

let count;
let textResult;

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

function roll() {
    count++;
    let cube = document.getElementById('cube');
    let faceArray = ['1', '2', '3', '4', '5', '6'];
    let randomValue = faceArray[Math.floor(Math.random() * faceArray.length)];
    
    if(count === 1) {
        switch(randomValue) {
            case '1':
                cube.classList.add('face-one');
                textResult.classList.remove('none');
                textResult.innerHTML = `Salió ${randomValue}, si no tenias ganas de que salga eso, presioná en "Desver que onda" para volver a tirar`;
                break;
            case '2':
                cube.classList.add('face-two');
                textResult.classList.remove('none');
                textResult.innerHTML = `Salió ${randomValue}, si no tenias ganas de que salga eso, presioná en "Desver que onda" para volver a tirar`;
                break;
            case '3':
                cube.classList.add('face-three');
                textResult.classList.remove('none');
                textResult.innerHTML = `Salió ${randomValue}, si no tenias ganas de que salga eso, presioná en "Desver que onda" para volver a tirar`;
                break;
            case '4':
                cube.classList.add('face-four');
                textResult.classList.remove('none');
                textResult.innerHTML = `Salió ${randomValue}, si no tenias ganas de que salga eso, presioná en "Desver que onda" para volver a tirar`;
                break;
            case '5':
                cube.classList.add('face-five');
                textResult.classList.remove('none');
                textResult.innerHTML = `Salió ${randomValue}, si no tenias ganas de que salga eso, presioná en "Desver que onda" para volver a tirar`;
                break;
            case '6':
                cube.classList.add('face-six');
                textResult.classList.remove('none');
                textResult.innerHTML = `Salió ${randomValue}, si no tenias ganas de que salga eso, presioná en "Desver que onda" para volver a tirar`;
                break;
            default:
                break;
        }
    }
}

function restart() {
    if(count > 0) {
        count = 0;
        cube.classList.remove(cube.classList[1]);
        textResult.classList.add('none')
    }
}

//array[Math.floor(Math.random() * array.length)]