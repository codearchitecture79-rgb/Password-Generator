let lengthInput = document.querySelector('#length');
let create = document.querySelector('button');
let uppercase = document.querySelector('#uppercase');
let specialChar = document.querySelector('#specialChar');
let number = document.querySelector('#number');
let display = document.querySelector('#display');
let popup = document.querySelector('.popup');


function getUppercaseLetter() {
    let randomUppercaseLetter = Math.ceil(Math.random() * (90 - 65) + 65);
    return String.fromCharCode(randomUppercaseLetter);
}

function getLowercaseLetter() {
    let randomLowercaseLetter = Math.ceil(Math.random() * (122 - 97) + 97);
    return String.fromCharCode(randomLowercaseLetter);
}

function getRandomNumber() {
    let randomNumber = Math.ceil(Math.random() * 9);
    return randomNumber
}

function getSpecialChar() {
    let randomSpecialChar;
    let random = Math.random();
    if (random < 0.3) {
        randomSpecialChar = Math.ceil(Math.random() * (47 - 33) + 33);
    }
    else if (random > 0.3 && random < 0.6) {
        randomSpecialChar = Math.ceil(Math.random() * (64 - 58) + 58);
    }
    else {
        randomSpecialChar = Math.ceil(Math.random() * (126 - 123) + 123);
    }

    return String.fromCharCode(randomSpecialChar);
}

function getPassword(len, containsUppercase, containsNumber, containsSpecialChar) {
    let str = '';
    if (len && !containsUppercase && !containsNumber && !containsSpecialChar) {
        for (let i = 0; i < len; i++) {
            str += getLowercaseLetter();
        }
        return str
    }
    else if (containsSpecialChar && containsNumber && containsUppercase) {
        for (let i = 0; i < len; i++) {
            let random = Math.random();
            if (random < 0.25) {
                str += getUppercaseLetter();
            }
            else if (random > 0.25 && random < 0.5) {
                str += getLowercaseLetter();
            }
            else if (random > 0.5 && random < 0.75) {
                str += getSpecialChar();
            }
            else {
                str += getRandomNumber();
            }
        }
        return str
    }
    else if (containsUppercase && !containsNumber && !containsSpecialChar) {
        for (let i = 0; i < len; i++) {
            let random = Math.random();
            if (random < 0.5) {
                str += getUppercaseLetter();
            }
            else {
                str += getLowercaseLetter();
            }
        }
        return str
    }
    else if (!containsUppercase && containsNumber && !containsSpecialChar) {
        for (let i = 0; i < len; i++) {
            let random = Math.random();
            if (random < 0.5) {
                str += getRandomNumber();
            }
            else {
                str += getLowercaseLetter();
            }
        }
        return str
    }
    else if (!containsUppercase && !containsNumber && containsSpecialChar) {
        for (let i = 0; i < len; i++) {
            let random = Math.random();
            if (random < 0.5) {
                str += getSpecialChar();
            }
            else {
                str += getLowercaseLetter();
            }
        }
        return str
    }
    else if (containsUppercase && containsNumber && !containsSpecialChar) {
        for (let i = 0; i < len; i++) {
            let random = Math.random();
            if (random < 0.3) {
                str += getUppercaseLetter();
            }
            else if (random > 0.3 && random < 0.6) {
                str += getRandomNumber();
            }
            else {
                str += getLowercaseLetter();
            }
        }
        return str
    }
    else if (!containsUppercase && containsNumber && containsSpecialChar) {
        for (let i = 0; i < len; i++) {
            let random = Math.random();
            if (random < 0.3) {
                str += getSpecialChar();
            }
            else if (random > 0.3 && random < 0.6) {
                str += getRandomNumber();
            }
            else {
                str += getLowercaseLetter();
            }
        }
        return str
    }
    else if (containsUppercase && !containsNumber && containsSpecialChar) {
        for (let i = 0; i < len; i++) {
            let random = Math.random();
            if (random < 0.3) {
                str += getSpecialChar();
            }
            else if (random > 0.3 && random < 0.6) {
                str += getUppercaseLetter();
            }
            else {
                str += getLowercaseLetter();
            }
        }
        return str
    }
}

let randomUppercaseLetter = getUppercaseLetter();
let randomLowercaseLetter = getLowercaseLetter();
let randomNumber = getRandomNumber();


let checkboxArray = [uppercase, number, specialChar];
let arr = [{ uppercase: uppercase.checked }, { number: number.checked }, { special: specialChar.checked }];

checkboxArray.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        arr = [{ uppercase: uppercase.checked }, { number: number.checked }, { special: specialChar.checked }];
    });
});

create.addEventListener('click', () => {
    let value = Number(lengthInput.value);
    if(value < 4){
        lengthInput.value = 6;
        popup.innerText = 'Cannot set length less than 4';
        popup.style.display = 'inline-block';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 2000);
    }
    if(value > 25){
        lengthInput.value = 25;
        popup.innerText = 'Cannot set length more than 25';
        popup.style.display = 'inline-block';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 2000);
    }
    let obj = {};
    for (let object of arr) {
        for (const key in object) {
            if (object[key] == true) {
                obj[key] = true;
            } else {
                obj[key] = false;
            }
        }
    }
    let [containsUppercase, containsNumber, containsSpecial] = Object.values(obj);

    if (!containsUppercase && !containsNumber && !containsSpecial) {
        display.innerText = getPassword(lengthInput.value);
    }
    else if (containsUppercase && containsNumber && containsSpecial) {
        display.innerText = getPassword(lengthInput.value, true, true, true);
    }
    else if (containsUppercase && !containsNumber && !containsSpecial) {
        display.innerText = getPassword(lengthInput.value, true, false, false);
    }
    else if (!containsUppercase && containsNumber && !containsSpecial) {
        display.innerText = getPassword(lengthInput.value, false, true, false);
    }
    else if (!containsUppercase && !containsNumber && containsSpecial) {
        display.innerText = getPassword(lengthInput.value, false, false, true);
    }
    else if (containsUppercase && containsNumber && !containsSpecial) {
        display.innerText = getPassword(lengthInput.value, true, true, false);
    }
    else if (!containsUppercase && containsNumber && containsSpecial) {
        display.innerText = getPassword(lengthInput.value, false, true, true);
    }
    else if (containsUppercase && !containsNumber && containsSpecial) {
        display.innerText = getPassword(lengthInput.value, true, false, true);
    }
    else{
        console.log('something went wrong');
    }

    lengthInput.value = '';
    uppercase.checked = false;
    number.checked = false;
    specialChar.checked = false;
})

let copyBtn = document.querySelector('span');

copyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(display.innerText)
})

