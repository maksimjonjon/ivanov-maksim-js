const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function inputEmail() {
  return new Promise((resolve) => {
    function askEmail() {
      rl.question('Введите email: ', (email) => {
        const emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/;
        
        if (emailRegex.test(email)) {
          console.log(`Корректный email: ${email}`);
          resolve(email);
          rl.close();
        } else {
          console.log('Ошибка: неверный формат email!');
          console.log('Пример: user.name-123@mail.ru');
          askEmail();
        }
      });
    }
    
    askEmail();
  });
}

inputEmail().catch(console.error);