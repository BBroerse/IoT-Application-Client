import moment from 'moment';

export function prepareChartData(data, dateField, valueField) {
  let temp = [];

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const unixDate = dateField == "time" ? moment.unix(element[dateField]).valueOf() : moment(element[dateField]).valueOf();
    const value = (element[valueField]).toString();
    
    temp.push([unixDate, value])
  }

  return temp;
}