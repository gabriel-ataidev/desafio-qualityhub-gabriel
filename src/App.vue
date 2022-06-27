<template>
  <div class="content">
    <h1 class="title">
      Confira abaixo o gráfico de pizza que mostra o número de pokemons de cada
      tipo e o gráfico de barras que mostra a quantidade de pokemons com tal
      quantidade de habilidades
    </h1>
    <div id="charts">
      <PieChart />
      <BarChart />
    </div>
  </div>
</template>

<script>
import PieChart from "./components/PieChart.vue";
import BarChart from "./components/BarChart.vue";
export default {
  name: "App",
  components: {
    PieChart,
    BarChart,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.content {
  background-color: rgb(240, 240, 240);
  .title {
    margin: 0 auto;
    text-align: center;
    padding: 20px;
    font-size: 20px;
    max-width: 70%;
  }
  #charts {
    display: flex;
    justify-content: space-around;
    padding: 60px 40px;
  }
}

@media (max-width: 850px) {
  .content {
    .title {
      max-width: 90%;
    }
  }
  #charts {
    flex-direction: column;
    gap: 60px;
  }
}
</style>
