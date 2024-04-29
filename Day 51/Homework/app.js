function updateWeather() {
    let city = document.getElementById('city-input').value;
    let temperature = prompt("Enter the temperature in Celsius:");
    let condition = prompt("Enter the weather condition (e.g., Sunny, Rainy):");

    document.getElementById('city-name').textContent = city;
    document.getElementById('temp').textContent = temperature;
    document.getElementById('condition').textContent = condition;
}
