<template>
  <div id="content">
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
  </div>
</template>

<script>
import axios from "axios";
import {Bar} from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: "BarChart",
  components: {Bar},
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
        pokemonData: [],
        a: null,
        b: null,
        c: null,
      chartData: {
        labels: ["1 habilidade", "2 habilidades", "3 habilidades"],
        datasets: [{
            label: 'Quantidade de pokemons com essa quantidade de habilidades',
            backgroundColor: 'rgb(170, 241, 170)',
            borderColor: 'rgb(0, 128, 0)',
            data: [6, 46, 99]
            }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  created() {
    this.getPokemonData();
  },
  methods: {
    getPokemonData() {
      for (let j = 1; j < 152; j++) {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${j}/`)
          .then((response) => {
            this.pokemonData.push(response.data);
            if (response.data.abilities.length == 1) {
              this.a++;
            } else if (response.data.abilities.length == 2) {
              this.b++;
            } else {
              this.c++;
            }
          });
      }
    },
  },
};
</script>

<style scoped lang="less">

</style>