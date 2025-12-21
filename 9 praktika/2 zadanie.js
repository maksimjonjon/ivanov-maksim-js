const axios = require('axios');

async function createPost(postData) {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
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
  console.log('Тестирование функции createPost');
  
  const newPost = await createPost({
    title: 'Мой первый пост',
    body: 'Это содержимое моего первого поста на блоге',
    userId: 1
  });
  
  if (newPost) {
    console.log('Пост успешно создан:');
    console.log(`ID поста: ${newPost.id}`);
    console.log(`Заголовок: ${newPost.title}`);
    console.log(`Содержание: ${newPost.body}`);
    console.log(`ID пользователя: ${newPost.userId}`);
  } else {
    console.log('Не удалось создать пост');
  }
})();