const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function inputCity() {
  return new Promise((resolve) => {
    function askCity() {
      rl.question('Введите город проживания: ', (city) => {
        const cityRegex = /^[А-Яа-яЁёA-Za-z\s-]{2,}$/;
        
        if (cityRegex.test(city) && !/\d/.test(city)) {
          console.log(`Корректный город: ${city}`);
          resolve(city);
          rl.close();
        } else {
          console.log('Ошибка: неверный формат города!');
          console.log('Допустимы: буквы, пробелы, дефис. Минимум 2 символа. Без цифр.');
          askCity();
        }
      });
    }
    
    askCity();
  });
}

inputCity().catch(console.error);