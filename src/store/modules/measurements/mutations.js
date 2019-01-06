export function currentMeasurements(state, payload) {
  state.currentMeasurements = payload
}

export function weeklyMeasurements(state, payload) {
  state.weeklyMeasurements = payload
}

export function currentWeatherApiData(state, payload) {
  state.currentWeatherApiData = payload
}

export function weeklyWeatherApiData(state, payload) {
  state.weeklyWeatherApiData = payload
}

export function weatherApiLastUpdated(state, payload) {
  state.weatherApiLastUpdated = payload
}