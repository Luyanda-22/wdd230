function updateWindChill(temperatureCelsius, windSpeedMeterSec) {
    // Convert metric to imperial units
    var temperatureF = (temperatureCelsius * 9/5) + 32;
    var windSpeedMph = windSpeedMeterSec * 2.237;

    // Check if the input values meet the specification limits
    if (temperatureF <= 50 && windSpeedMph > 3.0) {
        // Calculate wind chill factor
        var windchill = calculateWindChill(temperatureF, windSpeedMph);
        // Update HTML with wind chill factor
        document.getElementById('windchill').textContent = windchill.toFixed(1) + "°F";
    } else {
        // Display "N/A" if input values did not meet the requirements
        document.getElementById('windchill').textContent = "N/A";
    }
}
