<template>
  <div id="content">
    <Pie />
  </div>
</template>

<script>
import axios from "axios";
import { h } from 'vue'
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)
export default {
  name: "PieChart",
  components: {
    Pie
  },
  data() {
    return {
      pokemonTypes: [],
    };
  },
  created() {
    this.getPokemonData();
  },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
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
  setup(props) {
    const chartData = {
      labels: ["grass","poison","fire","flying","water","bug","normal","electric","ground","fairy","fighting","psychic","rock","steel","ice","ghost","dragon"],
      datasets: [
        {
          backgroundColor: ['#2CA880', '#A0AA60', '#30503A', '#BFBF5E', '#29A0B1', '#167D7F', '#98D7C2', '#18A558', '#A3EBB1', '#21B6A8', '#116530', '#9CE9DE', '#229A00', '#03BB85', '#77DD77', '#7AD3BE', '#BDFFFF'],
          data: [14, 33, 12, 19, 32, 12, 22, 9, 14, 5, 8, 14, 11, 2, 5, 3, 3]
        }
      ]
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    }

    return () =>
      h(Pie, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      })
  },
  methods: {
    getPokemonData() {
      for (let j = 1; j < 152; j++) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${j}/`).then((response) => {
        this.pokemonTypes.push(response.data.types[0].type.name);
        if(response.data.types[1]){
          this.pokemonTypes.push(response.data.types[1].type.name);
        }
        // console.log(this.pokemonTypes)
        });
      }
    },
  },
};
</script>

<style scoped lang="less">

</style>