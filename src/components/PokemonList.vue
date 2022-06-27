<template>
  <div id="content">
    <div class="card" v-for="pokemon in pokemonData" :key="pokemon.id"> 
        <div class="text">
            <h1 class="name">{{ pokemon.forms[0].name }}</h1>
            <span class="abilities" v-if="pokemon.abilities.length == 1"> Possui {{pokemon.abilities.length}} habilidade</span>
            <span class="abilities" v-else> Possui {{pokemon.abilities.length}} habilidades</span>
            <div>
            <span class="type">{{ pokemon.types[0].type.name }}</span>
            <span class="type" v-if="pokemon.types[1]">{{ pokemon.types[1].type.name }}</span>
            </div>
        </div>
        <div class="img">
            <img :src="pokemon.sprites.front_default" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PokemonList",
  data() {
    return {
        pokemonData: [],
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
          });
      }
    },
  },
};
</script>

<style scoped lang="less">

#content{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    .card{
        display: flex;
        justify-content: space-between;
        padding: 20px ;
        border-radius: 10px;
        border: 1px solid rgb(194, 194, 194);
        max-width: fit-content;
        background: #ffffff;
        gap: 20px;
        transition: all .4s ease-in-out;
        filter: drop-shadow(4px 4px 4px rgb(224, 224, 224));
        &:hover{
            background: #e9fded;
        }
        .text{
            display: flex;
            flex-direction: column;
            gap: 10px;
            .name{
                font-size: 28px;
            }
            .abilities{
                font-size: 16px;
            }
            .type{
                background: rgb(170, 241, 170);
                color: rgb(0, 128, 0);
                font-size: 14px;
                padding: 4px 8px;
                border-radius: 6px;
                width: fit-content;
                margin-right: 10px;
            }
        }
    }
}
</style>
