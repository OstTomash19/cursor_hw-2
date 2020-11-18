let firstNumberForCount = +prompt(`Вкажіть ціле число, з якого ми починатимемо скаладати числа`, ``); 
let sumOfNumbers = 0;

while(!Number.isInteger(firstNumberForCount) || !firstNumberForCount) {
    firstNumberForCount = +prompt(`Вкажіть будь-ласка ціле число, з якого ми починатимемо підрахунок`, ``);
}

let secondNumberForCount = +prompt(`Вкажіть ціле число, до якого ми будемо складати числа (включно)`, ``); 

while(!Number.isInteger(secondNumberForCount) || firstNumberForCount >= secondNumberForCount) {
    secondNumberForCount = +prompt(`Вкажіть будь-ласка ціле число, до якого ми будемо складати числа (включно)`, ``);
}

const skipEvenNumbers = confirm(`Пропускати парні числа при додаванні?`);

for(let i = firstNumberForCount; i <= secondNumberForCount; i++) {
    if(skipEvenNumbers && i % 2 === 0) {
        continue;
    } 
        sumOfNumbers += i;
}

console.log(`Сума цифр дорівнює : ${sumOfNumbers};`);