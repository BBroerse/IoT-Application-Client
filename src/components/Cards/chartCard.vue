<template>
  <apexchart :width="width" :type="type" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
  export default {
    name: 'ChartCard',
    props: {
      width: String,
      type: String,
      series: Array
    },
    data() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart'
          },
          xaxis: {
            categories: []
          }
        }
      }
    }
  }
</script>