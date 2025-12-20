const axios = require('axios');

async function getPost(id) {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  try {
    const url = id ? `${baseUrl}/${id}` : baseUrl;
    const response = await axios.get(url);
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

async function example1() {
  const allPosts = await getPost();
  console.log('Все посты:', allPosts ? `получено ${Array.isArray(allPosts) ? allPosts.length : '1'} пост(ов)` : 'не получены');
}

async function example2() {
  const postId = 1;
  const post = await getPost(postId);
  console.log(`Пост с id=${postId}:`, post ? `"${post.title}"` : 'не найден');
}

async function example3() {
  const post = await getPost(999);
  console.log('Пост с id=999:', post ? `"${post.title}"` : 'не найден');
}

(async function main() {
  console.log('Пример 1: Получение всех постов');
  await example1();
  
  console.log('\nПример 2: Получение конкретного поста');
  await example2();
  
  console.log('\nПример 3: Попытка получить несуществующий пост');
  await example3();
})();