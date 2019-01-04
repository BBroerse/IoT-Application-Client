<template>
  <v-card width="200" height="100" dark color="secondary">
      <v-card-title>
      <span class="title font-weight-light">{{title}}</span>
    </v-card-title>
    <v-card-text class="px-0">{{value}}</v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'StatisticsCard',
  props: {
    title: String,
    value: [String, Number]
  }
}
</script>

<style>
  
</style>