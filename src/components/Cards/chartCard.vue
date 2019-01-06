<template>
  <apexchart :width="width" :type="chartType" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
  import * as R from 'ramda';
  import moment from 'moment'

  export default {
    name: 'ChartCard',
    props: {
      width: String,
      chartType: String,
      chartConfig: Object,
      weeklyMeasurements: Array,
    },
    data() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart',
            animations: {
              initialAnimation: {
                enabled: false
              }
            }
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: { 
            min: 0,  // set Dynamically
            max: 15   // set Dynamically
          }, 
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 100]
            }
          },
        },
        series: []
      }
    },
    watch: {
      weeklyMeasurements: {
        immediate: true,
        handler (data) {
          this.series = [{
            name: this.type,
            data: data
          }]
        }
      },
      chartConfig: {
        immediate: true,
        handler(chartConfig) {
          this.chartOptions.yaxis.min = chartConfig.min
          this.chartOptions.yaxis.max = chartConfig.max
        }
      }
    }
  }
</script>