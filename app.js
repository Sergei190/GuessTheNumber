const secretNum = 5;
let tries = 0;

function guessNum(num) {
    if (tries >= 5) return alert('Игра окончена!');     

    if (num == secretNum) {
        alert('Вы угадали!');
        tries = 5;
    } else {
        if (num < secretNum) {
            alert('Вы не угадали! Попробуйте большее число. 🔼');
        } else {
            alert('Вы не угадали! Попробуйте меньшее число. 🔽');
        }
        tries++;
    }
}