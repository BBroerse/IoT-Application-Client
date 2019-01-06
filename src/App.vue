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
      <dashboard v-if="indoorToggle" :types="types.indoor" :currentMeasurements="currentMeasurements" :weeklyMeasurements="weeklyMeasurements" />
      <dashboard v-if="!indoorToggle" :types="types.outdoor" :currentMeasurements="currentWeatherApiData" :weeklyMeasurements="weeklyWeatherApiData" />
    </v-content>
  </v-app>
</template>

<script>
import Dashboard from './components/Dashboard'
import { mapGetters } from 'vuex'
import moment from 'moment'
import config from '../config'

export default {
  name: 'App',
  components: {
    "dashboard": Dashboard
  },
  data () {
    return {
      indoorToggle: true,
      types: config.types
    }
  },
  computed: {
    ...mapGetters({
      currentMeasurements: 'measurements/currentMeasurements',
      weeklyMeasurements: 'measurements/weeklyMeasurements',
      currentWeatherApiData: 'measurements/currentWeatherApiData',
      weeklyWeatherApiData: 'measurements/weeklyWeatherApiData',
      weatherApiLastUpdated: 'measurements/weatherApiLastUpdated',
    })
  },
  mounted() {
    this.$store.dispatch('measurements/GetMeasurements')

     setInterval(() => {
      this.$store.dispatch('measurements/GetMeasurements')
     }, 1000 * 60 * 5); // Update measurements every 5 minutes
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

