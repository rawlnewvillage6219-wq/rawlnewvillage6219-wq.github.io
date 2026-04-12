// Car object constructor
function Car(make, model, year, color, price) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;

    // Display method
    this.display = function() {
        return `
            <div class="card">
                <h3>${this.make} ${this.model}</h3>
                <p><strong>Year:</strong> ${this.year}</p>
                <p><strong>Color:</strong> ${this.color}</p>
                <p><strong>Price:</strong> $${this.price}</p>
            </div>
        `;
    };
}

// Array of 5 car objects
let cars = [
    new Car("Toyota", "Camry", 2022, "White", 25000),
    new Car("Honda", "Civic", 2021, "Black", 22000),
    new Car("Ford", "Mustang", 2023, "Red", 35000),
    new Car("Chevrolet", "Malibu", 2020, "Blue", 21000),
    new Car("Tesla", "Model 3", 2024, "Silver", 40000)
];

// Display all cars
let output = document.getElementById("output");

cars.forEach(car => {
    output.innerHTML += car.display();
});