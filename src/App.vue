<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>
          Climate Measurements: {{indoorToggleText()}}
        </span>
      </v-toolbar-title>
      <v-spacer />
      <v-switch  
        class="justify-end" 
        :label="indoorToggleText()" 
        v-model="indoorToggle" 
      />
    </v-toolbar>

    <v-content >
      <dashboard :types="types[indoorToggleText()]" :currentMeasurements="currentMeasurements" :weeklyMeasurements="weeklyMeasurements"/>
    </v-content>
  </v-app>
</template>

<script>
import Dashboard from './components/Dashboard'

export default {
  name: 'App',
  components: {
    "dashboard": Dashboard
  },
  data () {
    return {
      indoorToggle: true,
      types: {
        indoor: [
          {
            displayText: "Temperature",
            attribute: "temperature",
            chart: true, statistics: true
          },
          {
            displayText: "Humidity",
            attribute: "humidity",
            chart: true, statistics: true
          },
          {
            displayText: "CO2 ppm",
            attribute: "co2_ppm",
            chart: true, statistics: true
          },
          {
            displayText: "Last updated",
            attribute: "created_at",
            chart: false, statistics: true
          }
        ],
        outdoor: [
          {
            displayText: "Temperature",
            attribute: "temperature",
            chart: true, statistics: true
          },
          {
            displayText: "Humidity",
            attribute: "humidity",
            chart: true, statistics: true
          },
          {
            displayText: "Wind speed",
            attribute: "windSpeed",
            chart: true, statistics: true
          },
          {
            displayText: "Last updated",
            attribute: "created_at",
            chart: false, statistics: true
          }
        ]
      },

      currentMeasurements: {},
      weeklyMeasurements: []
    }
  },
  methods: {
    indoorToggleText() {
      return this.indoorToggle ? 'indoor' : 'outdoor'
    }
  }
}
</script>

<style>
  .v-content {
    background-color: gray;
    height: 100vh;
  }
</style>

