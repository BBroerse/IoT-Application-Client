import moment from 'moment';

let temperature = {
  displayText: "Temperature",
  attribute: "temperature",
  statistics: true,
  chart: { min: 0, max: 20, visible: true },
  displayValue: function(value) {
    return `${value} °C`
  }
}

let humidity = {
  displayText: "Humidity",
  attribute: "humidity",
  statistics: true,
  chart: { min: 0, max: 100, visible: true },
  displayValue: function(value) {
    return `${value}%`
  }
}

let apparentTemperature = {
  displayText: "Apparent temperature",
  attribute: "apparentTemperature",
  statistics: true,
  chart: { min: 0, max: 20, visible: true },
  displayValue: function(value) {
    return `${value} °C`
  }
}

let co2_ppm = {
  displayText: "CO2",
  attribute: "co2_ppm",
  statistics: true,
  chart: { min: 0, max: 20, visible: true },
  displayValue: function(value) {
    return `${value} ppm`
  }
}

let windSpeed = {
  displayText: "Wind speed",
  attribute: "windSpeed",
  statistics: true,
  chart: { min: 0, max: 10, visible: true },
  displayValue: function(value) {
    return `${value} km/h`
  }
}

let last_updated = {
  displayText: "Last updated",
  attribute: "created_at",
  statistics: true,
  chart: { visible: false },
  displayValue: function(value) {
    return moment(value).format("DD-MM-YYYY HH:mm")
  }
}

export default {
  indoor: [
    temperature,
    humidity,
    co2_ppm,
    last_updated
  ],
  outdoor: [
    temperature,
    apparentTemperature,
    windSpeed,
    last_updated
  ]
};