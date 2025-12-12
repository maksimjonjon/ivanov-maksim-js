const ids = pam(products, item => item.id);
const titles = pam(products, item => item.title);
const prices = pam(products, item => item.price);
const categories = pam(products, item => item.category);
const rates = pam(products, item => item.rating.rate);
const counts = pam(products, item => item.rating.count);

console.log(ids);
console.log(titles);
console.log(prices);
console.log(categories);
console.log(rates);
console.log(counts);
