import { getMeasurements, getLatestMeasurements } from '../../../api/measurements'
import { getDarkSkyMeasurements } from '../../../api/darksky'
import { prepareChartData } from '../../../utils'
import config from '../../../../config'

import moment from 'moment'

export function GetMeasurements({commit, dispatch}) {
  dispatch('GetLatestMeasurements')
  dispatch('GetWeeklyMeasurements')
  dispatch('GetDarkSkyMeasurements')
}

export function GetLatestMeasurements({commit}) {
  return new Promise((resolve, reject) => {
    getLatestMeasurements().then(response => {
      const data = response.data
      commit('currentMeasurements', data)

      resolve()
    }).catch(error => {
      reject(error)
    })
  });
}

export function GetWeeklyMeasurements({commit}) {  
  return new Promise((resolve, reject) => {

    const beginDate = moment()
      .format("YYYY-MM-DD")
    
    const endDate = moment()
      .hours(24)
      .minutes(59)
      .seconds(59)
      .millisecond(999)
      .toISOString()

    getMeasurements(beginDate, endDate).then(response => {
      const data = response.data

      const weeklyData = {};
      for (let i = 0; i < config.types.indoor.length; i++) {
        const element = config.types.indoor[i];
        if(element.chart.visible) {
          const arr = prepareChartData(data, 'created_at', element.attribute);
          weeklyData[element.attribute] = arr;
        }
      }

      commit('weeklyMeasurements', weeklyData)
      
      resolve()
    }).catch(error => {
      reject(error)
    })
  });
}

export function GetDarkSkyMeasurements({commit}) {
  return new Promise((resolve, reject) => {

    let time = moment().format("YYYY-MM-DD") + "T00:00:00"

    getDarkSkyMeasurements(time).then(response => {
      const data = response.data
      commit('currentWeatherApiData', data.currently)

      const weeklyData = {};
      for (let i = 0; i < config.types.outdoor.length; i++) {
        const element = config.types.outdoor[i];
        if(element.chart.visible) {
          const arr = prepareChartData(data.hourly.data, 'time', element.attribute);
          weeklyData[element.attribute] = arr;
        }
      }

      commit('weeklyWeatherApiData', weeklyData)

      resolve()
    }).catch(error => {
      reject(error)
    })
  });
}