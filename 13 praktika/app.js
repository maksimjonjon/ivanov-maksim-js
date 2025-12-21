const fs = require('fs');
const readline = require('readline');

const fileName = process.argv[2];

if (!fileName) {
    console.log('Использование: node app.js имя_файла.txt');
    console.log('Пример: node app.js заметки.txt');
    process.exit(1);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

if (fs.existsSync(fileName)) {
    try {
        const currentText = fs.readFileSync(fileName, 'utf8');
        console.log('Текущее содержимое файла:');
        console.log('-------------------------');
        console.log(currentText);
        console.log('-------------------------');
    } catch (error) {
        console.log('Не удалось прочитать файл.');
    }
} else {
    console.log('Файл не найден. Будет создан новый.');
}

console.log('\nВведите новый текст для файла:');
console.log('(Чтобы завершить ввод, напишите END и нажмите Enter)');

let newText = '';
let isFirstLine = true;

rl.on('line', (input) => {
    if (input === 'END') {
        rl.close();
    } else {
        if (!isFirstLine) {
            newText += '\n';
        }
        newText += input;
        isFirstLine = false;
    }
});

rl.on('close', () => {
    try {
        fs.writeFileSync(fileName, newText, 'utf8');
        console.log('Файл успешно перезаписан!');
    } catch (error) {
        console.log('Ошибка при записи файла:', error.message);
    }
    
    process.exit(0);
});

rl.on('SIGINT', () => {
    console.log('\nВвод отменен.');
    rl.close();
});

console.log('Введите текст ниже:');