// Car data (images, prices, type, seat, transmission, fuel type, and brand logos) for different cars
const carData = {
    toyota: {
        name: 'Toyota Corolla',
        logoName: 'Toyota',
        image: 'toyota_corolla.png',
        price: '₹2500/-',
        type: 'Sedan',
        seat: '5',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        logo: 'toyota-logo.png'
    },
    chevrolet: {
        name: 'Chevrolet Spark',
        logoName: 'Chevrolet',
        image: 'chevrolet_spark.png',
        price: '₹1500/-',
        type: 'Hatchback',
        seat: '4',
        transmission: 'Manual',
        fuelType: 'Petrol',
        logo: 'chevrolet-logo.png'
    },
    fordEscape: {
        name: 'Ford Escape',
        logoName: 'Ford',
        image: 'ford_escape.png',
        price: '₹3000/-',
        type: 'SUV',
        seat: '5',
        transmission: 'Automatic',
        fuelType: 'Diesel',
        logo: 'ford-logo.png'
    },
    fordMustang: {
        name: 'Ford Mustang',
        logoName: 'Ford',
        image: 'ford_mustang.png',
        price: '₹5000/-',
        type: 'Sports Car',
        seat: '2',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        logo: 'ford-logo.png'
    },
    nissan: {
        name: 'Nissan Altima',
        logoName: 'Nissan',
        image: 'nissan_altima.png',
        price: '₹2200/-',
        type: 'Sedan',
        seat: '5',
        transmission: 'Automatic',
        fuelType: 'Diesel',
        logo: 'nissan-logo.png'
    },
    hondaCivic: {
        name: 'Honda Civic',
        logoName: 'Honda',
        image: 'honda_civic.png',
        price: '₹2000/-',
        type: 'Sedan',
        seat: '5',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        logo: 'honda-logo.png'
    },
    hondaAccord: {
        name: 'Honda Accord',
        logoName: 'Honda',
        image: 'honda_accord.png',
        price: '₹2800/-',
        type: 'Sedan',
        seat: '5',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        logo: 'honda-logo.png'
    },
    kia: {
        name: 'Kia Shortage',
        logoName: 'Kia',
        image: 'kia_shortage.png',
        price: '₹1800/-',
        type: 'SUV',
        seat: '5',
        transmission: 'Manual',
        fuelType: 'Petrol',
        logo: 'kia-logo.png'
    },
    dodge: {
        name: 'Dodge Charger',
        logoName: 'Dodge',
        image: 'dodge_charger.png',
        price: '₹4000/-',
        type: 'Sedan',
        seat: '5',
        transmission: 'Automatic',
        fuelType: 'Diesel',
        logo: 'dodge-logo.png'
    }
};

// Display car list
function displayCarList(excludeCar) {
    const carList = document.getElementById('carList');
    carList.innerHTML = '';  // Clear the existing list

    for (let key in carData) {
        if (carData[key].name !== excludeCar) {
            let li = document.createElement('li');
            li.textContent = carData[key].name;
            li.addEventListener('click', function() {
                updateCarDetails(key);
            });
            carList.appendChild(li);
        }
    }
}

// Update car details on selection
function updateCarDetails(carKey) {
    const car = carData[carKey];

    // Update the main car image and details
    document.getElementById('carImage').src = car.image;
    document.getElementById('carPrice').textContent = car.price;
    document.getElementById('carName').textContent=car.name;
    document.getElementById('carType').textContent = car.type;
    document.getElementById('carSeats').textContent = car.seat;
    document.getElementById('carTransmission').textContent = car.transmission;
    document.getElementById('carFuel').textContent = car.fuelType;

    // Update the brand logo
    document.getElementById('brandLogo').src = car.logo;

    document.getElementById('logoName').textContent= car.logoName;

    // Update the car list, excluding the selected car
    displayCarList(car.name);
}

// Initial setup
displayCarList();
