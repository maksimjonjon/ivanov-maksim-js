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

class Plane extends Transport {
    constructor(type, brand, maxAltitude) {
        super(type, brand);
        this.maxAltitude = maxAltitude;
    }
    
    startEngine() {
        if (!this.isEngineOn) {
            console.log("Турбины запускаются...");
            this.isEngineOn = true;
        } else {
            console.log("Турбины уже работают.");
        }
    }
    
    takeOff() {
        this.startEngine();
        console.log("Самолет взлетает!");
    }
}

console.log("=== Тестирование класса Plane ===");
const airliner = new Plane("самолет", "Boeing", 12000);
console.log(`Самолет: ${airliner.brand}, макс. высота - ${airliner.maxAltitude} м`);
airliner.takeOff();
airliner.stopEngine();