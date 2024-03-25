function updateWindChill(temperatureCelsius, windSpeedMeterSec) {
    var temperatureF = (temperatureCelsius * 9/5) + 32;
    var windSpeedMph = windSpeedMeterSec * 2.237;

    if (temperatureF <= 50 && windSpeedMph > 3.0) {
        var windchill = calculateWindChill(temperatureF, windSpeedMph);
        document.getElementById('windchill').textContent = windchill.toFixed(1) + "°F";
    } else {
        document.getElementById('windchill').textContent = "N/A";
    }
}
