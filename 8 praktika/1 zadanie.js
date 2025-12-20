const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log('Имена всех пользователей:');
    response.data.forEach(user => console.log(user.name));
  })
  .catch(error => {
    if (error.response) {
      console.error(`Ошибка сервера: ${error.response.status}`);
    } else if (error.request) {
      console.error('Ошибка: сервис недоступен или нет ответа от сервера');
    } else {
      console.error('Ошибка:', error.message);
    }
  });