import request from '../utils/request'

const endpoint = 'measurements'

export function getMeasurements(beginDate, endDate) {
  return request.get(`${endpoint}?begin_date=${beginDate}&end_date=${endDate}`)
}

export function getLatestMeasurements() {
  return request.get(`${endpoint}/latest`)
}