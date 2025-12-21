const fs = require('fs');

try {
  const data = fs.readFileSync('data.txt', 'utf8');
  
  const linesArray = data.split('\n');
  const nonEmptyLines = linesArray.filter(line => line.trim() !== '');
  
  console.log(`Всего строк в файле: ${linesArray.length}`);
  console.log(`Непустых строк: ${nonEmptyLines.length}`);
  console.log(`Количество символов: ${data.length}`);

  if (linesArray.length > 0) {
    console.log(`Первая строка: "${linesArray[0]}"`);
  }
  
} catch (error) {
  console.log('Ошибка: файл data.txt не найден');
  console.log('Создайте файл data.txt с каким-либо содержимым');
}