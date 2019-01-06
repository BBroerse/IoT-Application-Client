import request from '../utils/request'
import moment from 'moment'

const api_key = process.env.VUE_APP_DARKSKY_KEY;
var proxy = 'https://cors-anywhere.herokuapp.com/';

export function getDarkSkyMeasurements(time, lat = '52.4842303', lon = '4.7622159') {
  const url = `https://api.darksky.net/forecast/${api_key}/${lat},${lon},${time}?units=auto`;
  return request.get(`${proxy}${url}`)
}