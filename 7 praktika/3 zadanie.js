const ids2 = products.map(item => item.id);
const titles2 = products.map(item => item.title);
const prices2 = products.map(item => item.price);
const categories2 = products.map(item => item.category);
const rates2 = products.map(item => item.rating.rate);
const counts2 = products.map(item => item.rating.count);

console.log(ids2);
console.log(titles2);
console.log(prices2);
console.log(categories2);
console.log(rates2);
console.log(counts2);
