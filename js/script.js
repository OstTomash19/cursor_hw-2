let firstNumberForCount = prompt(`Вкажіть ціле число, з якого ми починатимемо скаладати числа`, ``); 
let sumOfNumbers = 0;

function isFloat(value) {
    return value % 1 !== 0;
}

while(isNaN(firstNumberForCount) || isFloat(firstNumberForCount) || !firstNumberForCount) {
    firstNumberForCount = prompt(`Вкажіть будь-ласка ціле число, з якого ми починатимемо підрахунок`, ``);
}

firstNumberForCount = Number(firstNumberForCount);

let secondNumberForCount = +prompt(`Вкажіть ціле число, до якого ми будемо складати числа (включно)`, ``); 

while(isNaN(secondNumberForCount) || isFloat(secondNumberForCount) || firstNumberForCount >= secondNumberForCount) {
    secondNumberForCount = +prompt(`Вкажіть будь-ласка ціле число, до якого ми будемо складати числа (включно)`, ``);
}

const skipEvenNumbers = confirm(`Пропускати парні числа при додаванні?`);

for(let i = firstNumberForCount; i <= secondNumberForCount; i++) {
    if(!skipEvenNumbers) {
        sumOfNumbers += i;
    } else {
        i % 2 === 0 ? 0 : sumOfNumbers += i;
    }
}

console.log(`Сума цифр дорівнює : ${sumOfNumbers};`);