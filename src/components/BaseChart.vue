<template>
  <div id="chart">
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const series = ref([
  {
    name: "Desktops",
    data: [0, 20, 40, 60, 80, 100],
  },
]);
const chartOptions = ref({
  chart: {
    height: 100,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
});
</script>
