let initNumber = 2;  // Инициализируем начальное число
let n = 0;          // Множитель
let timeoutINTI = 10000; // 10 секунд
let intiIntervalTime = 0; // Время интервала обновления inti
let infinityTimeout = 0; // if 0 no infinity if 1 infinity
var initInterval;
var intiTimeoutOff;
let mathOperation = 3; // по умолчанию умножение
let INTI; // result
let audioSecond = new Audio('countdown.mp3');
let audioThird = new Audio('ending.mp3');
var audio = document.getElementById('audioDDD');
function updateALL() {
    location.reload();
}
// Функция для создания диалогового окна с input и записи значения в переменную
function getInputValue() {
    let userInput = prompt("Пожалуйста, выберите математическое действие:\nСложение - 1\nВычитание - 2\nУмножение - 3\nДеление - 4\nЕсли необходимы более сложные действия отредактируйте исходный код: INTI Emulator/script/inti.js:172", "");
    if (userInput !== null) { // Проверяем, что пользователь не отменил ввод
        // Записываем значение в переменную
        let inputValue = Number(userInput);
        mathOperation = inputValue;
        intiStart();
    } else {
        updateALL();
    }
}

function enterUserFormulaFirstNumberTime() {
    var intiIntervalTimeVal = document.getElementById("userFormulaFirstNumberTime").value;
    timeoutINTI = intiIntervalTimeVal;
    if (timeoutINTI == 0) {
        intiIntervalTimeVal = 0;
    }
    document.getElementById("UserFormulaINTITimeValue").innerHTML = intiIntervalTimeVal;
}
function enterUserFormulaFirstNumberINTIStartValue() {
    var intiFirstValue = document.getElementById("userFormulaFirstNumberINTIStartValue").value;
    initNumber = Number(intiFirstValue);
    if (initNumber == 0) {
        intiFirstValue = 0;
    }
    document.getElementById("userFormulaINTIStartValue").innerHTML = intiFirstValue;
}
function enterUserFormulaNValue() {
    var intiNValue = document.getElementById("userFormulaNValue").value;
    n = Number(intiNValue);
    if (n == 0) {
        intiNValue = 0;
    }
    document.getElementById("userFormulaINTINEndValue").innerHTML = intiNValue;
}

function playAudio() {
    audio.play()
}
function playAudioCountdown() {
    audioSecond.play()
    .then(() => {
        console.log("Аудио воспроизводится");
    })
    .catch(error => {
        console.error("Ошибка воспроизведения аудио:", error);
    });
}
function playAudioEnd() {
    audioThird.play()
    .then(() => {
        console.log("Аудио воспроизводится");
    })
    .catch(error => {
        console.error("Ошибка воспроизведения аудио:", error);
    });
}
let sdfsdkfsjd = 0;

function intiStart() {
    if (infinityTimeout == 1) {
        sdfsdkfsjd = 0;
    } else {
        sdfsdkfsjd = 1;
    }
    INTI = initNumber;
    setTimeout(function() {
        playAudioCountdown();
    }, 800);
    document.getElementById("intiHighBackground-container").innerHTML = '<div id="intiHighBackground"><p id="countdown">3</p></div>';
    setTimeout(function() {
        document.getElementById("intiHighBackground").innerHTML = '<p id="countdown">2</p>';
        setTimeout(function() {
            document.getElementById("intiHighBackground").innerHTML = '<p id="countdown">1</p>';
            setTimeout(function() {
                document.getElementById("intiHighBackground").innerHTML = '<p id="countdown">START</p>';
                setTimeout(function() {
                    document.getElementById("intiHighBackground").innerHTML = '<p id="INTIRes"></p><br><br><br><br><button onclick="stopIntiHigh()" class="dkfjdkfj">Остановить</button>';
                    document.getElementById("intiSettings").style.display = "none";
                    INTIResult = document.getElementById("INTIRes");
                    if(sdfsdkfsjd == 1) {
                        setTimeout(function() {
                            stopIntiHigh();
                        }, timeoutINTI);
                    }
                    initInterval = setInterval(intiStartSimulation, 1);
                    playAudio();
                }, 1300);
            }, 1000);
        }, 1000);
    }, 1000);
}
function stopIntiHigh() {
    audio.pause();
    clearInterval(initInterval);
    document.getElementById("intiHighBackground").innerHTML = '<p id="countdown">STOP</p>';
    playAudioEnd();
    setTimeout(function() {
        document.getElementById("intiHighBackground-container").innerHTML = "";
        document.getElementById("intiSettings").innerHTML = '<span class="intiSettingsHeaderText">Результат INTI:</span><br><br><br><br><div class="textSettings">' + scientificToDecimal(INTI) + '</div><br><br><button class="buttonSettingsStartSimulation" onclick="updateALL()">Новая симуляция</button>';
        document.getElementById("intiSettings").style.display = "block";
    }, 2000);
}

function scientificToDecimal(num) {
    // Преобразуем число в строку
    let numStr = num.toString();

    // Если число не содержит 'e', возвращаем его как есть
    if (!numStr.includes('e')) {
        return numStr;
    }

    // Разбиваем строку на две части: мантиссу и экспоненту
    let [mantissa, exponent] = numStr.split('e');
    let decimal = '';

    // Преобразуем мантиссу и экспоненту в числа
    let exp = parseInt(exponent, 10);
    let [intPart, decPart] = mantissa.split('.');

    // Если экспонента положительная
    if (exp >= 0) {
        decimal = intPart + (decPart ? decPart : '') + '0'.repeat(exp - (decPart ? decPart.length : 0));
    } else {
        // Если экспонента отрицательная
        exp = -exp;
        decimal = '0.' + '0'.repeat(exp - 1) + intPart + (decPart ? decPart : '');
    }

    return decimal;
}

function useInfinityEndTime() {
    if (document.getElementById("useUnfinityCheckInp").checked) {
        document.getElementById("userFormulaFirstNumberTime").disabled = true;
        document.getElementById("UserFormulaINTITimeValue").innerHTML = "∞";
        infinityTimeout = 1;
    } else {
        document.getElementById("userFormulaFirstNumberTime").disabled = false;
        document.getElementById("userFormulaFirstNumberTime").value = "10";
        document.getElementById("UserFormulaINTITimeValue").innerHTML = "10";
        infinityTimeout = 0
    }
}
var INTIResult;


function intiStartSimulation() {
    if (mathOperation == 1) {
        INTI += initNumber;
    } else if (mathOperation == 2) {
        INTI -= initNumber;
    } else if (mathOperation == 3) {
        INTI *= initNumber;
    } else if (mathOperation == 4) {
        INTI /= initNumber;
    }
    INTIResult.innerHTML = INTI;
}