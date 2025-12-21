const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите строку текста: ', (text) => {
  fs.writeFileSync('output.txt', text, 'utf8');
  console.log('Текст сохранен в файл output.txt');
  rl.close();
});