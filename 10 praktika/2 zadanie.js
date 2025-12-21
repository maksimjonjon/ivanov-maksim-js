class Transport {
    constructor(type, brand) {
        this.type = type;
        this.brand = brand;
        this.isEngineOn = false;
    }
    
    startEngine() {
        if (!this.isEngineOn) {
            console.log("Двигатель запущен.");
            this.isEngineOn = true;
        } else {
            console.log("Двигатель уже работает.");
        }
    }
    
    stopEngine() {
        if (this.isEngineOn) {
            console.log("Двигатель заглушен.");
            this.isEngineOn = false;
        } else {
            console.log("Двигатель уже выключен.");
        }
    }
}

class Bus extends Transport {
    constructor(type, brand, passengerCount) {
        super(type, brand);
        this.passengerCount = passengerCount;
    }
    
    drive() {
        console.log(`Едем по маршруту с ${this.passengerCount} пассажирами`);
    }
}

console.log("=== Тестирование класса Bus ===");
const cityBus = new Bus("автобус", "Mercedes", 50);
console.log(`Автобус: ${cityBus.brand}, тип - ${cityBus.type}`);
cityBus.startEngine();
cityBus.drive();
cityBus.stopEngine();