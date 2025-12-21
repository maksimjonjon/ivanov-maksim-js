const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Вводите строки текста. Для завершения введите "stop":');

function askForInput() {
  rl.question('> ', (input) => {
    if (input.toLowerCase() === 'stop') {
      console.log('Программа завершена. Все строки сохранены в log.txt');
      rl.close();
      return;
    }
    
    fs.appendFileSync('log.txt', input + '\n', 'utf8');
    console.log('Строка добавлена в log.txt');
    askForInput();
  });
}

askForInput();