const axios = require('axios');

async function createUser(userData) {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`Ошибка сервера: ${error.response.status} - ${error.response.statusText}`);
    } else if (error.request) {
      console.error('Ошибка: нет ответа от сервера');
    } else {
      console.error('Ошибка при выполнении запроса:', error.message);
    }
    return null;
  }
}

// Пример использования
(async function() {
  console.log('Тестирование функции createUser');
  
  const newUser = await createUser({
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    phone: '123-456-7890'
  });
  
  if (newUser) {
    console.log('Пользователь успешно создан:');
    console.log(`ID: ${newUser.id}`);
    console.log(`Имя: ${newUser.name}`);
    console.log(`Email: ${newUser.email}`);
    console.log(`Телефон: ${newUser.phone}`);
  } else {
    console.log('Не удалось создать пользователя');
  }
  })();