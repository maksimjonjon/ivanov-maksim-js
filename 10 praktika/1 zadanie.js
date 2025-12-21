class Boat {
    constructor(color, material, maxSpeed) {
        this.color = color;
        this.material = material;
        this.maxSpeed = maxSpeed;
    }
    
    sail() {
        console.log("Плывём по волнам!");
    }
}

console.log("=== Тестирование класса Boat ===");
const myBoat = new Boat("синий", "дерево", 40);
console.log(`Лодка: цвет - ${myBoat.color}, материал - ${myBoat.material}, макс. скорость - ${myBoat.maxSpeed} км/ч`);
myBoat.sail();