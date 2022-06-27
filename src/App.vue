<template>
  <div class="content">
    <div id="charts">
      <PieChart />
    </div>
  </div>
</template>

<script>
import PieChart from "./components/PieChart.vue";
export default {
  name: 'App',
  components: {
    PieChart,
  }
}
</script>

<style lang="less">

</style>
