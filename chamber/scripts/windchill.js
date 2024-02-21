document.addEventListener('DOMContentLoaded', function() {
    // Get temperature and wind speed values from the HTML
    var temperature = parseFloat(document.getElementById('temperature').textContent);
    var windspeed = parseFloat(document.getElementById('windspeed').textContent);

    // Check if the input values meet the specification limits
    if (temperature <= 50 && windspeed > 3.0) {
        // Calculate wind chill factor
        var windchill = calculateWindChill(temperature, windspeed);
        // Update HTML with wind chill factor
        document.getElementById('windchill').textContent = windchill.toFixed(1) + "°F";
    } else {
        // Display "N/A" if input values did not meet the requirements
        document.getElementById('windchill').textContent = "N/A";
    }
});

function calculateWindChill(temperature, windspeed) {
    // Calculate wind chill factor using the formula
    var windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
    return windchill;
}