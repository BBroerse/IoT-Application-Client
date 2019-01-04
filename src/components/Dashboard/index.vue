<template>
  <v-container grid-list-md text-xs-center>
    <v-layout class="current-values" row wrap justify-space-around>
      <v-flex md2 v-for="(type, i) in types" :key="i" :if="type.statistics">
        <statistics-card :title="type.displayText" :value="currentMeasurements[type.attribute]" />
      </v-flex>
    </v-layout>
    
    <v-layout class="charts" >
      <v-flex md12 justify-center>
        <v-card height="100" >
          <v-tabs color="wihte" dark slider-color="yellow">
            <v-tab v-for="(type, i) in types" :key="i" ripple>
              {{type.name}}
            </v-tab>
            <v-tab-item :key="1">
              <v-card flat>
                <v-card-text>
                  <chart-card width="80%" type="line" />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item :key="2">
              <v-card flat>
                <v-card-text >
                  <chart-card width="80%" type="line" />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item :key="3">
              <v-card flat>
                <v-card-text>
                  <chart-card width="80%" type="line" />
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import StatisticsCard from '../Cards/statisticsCard'
  import ChartCard from '../Cards/chartCard'

  export default {
    name: 'Dashboard',
    components: {
      "statistics-card": StatisticsCard,
      'chart-card': ChartCard
    },
    props: {
      currentMeasurements: Object,
      historicMeasurements: Array,
      types: Array
    },
    data() {
      return {

      }
    }
  }
</script>

<style>
  .charts {
    padding-top: 20px;

  }
</style>