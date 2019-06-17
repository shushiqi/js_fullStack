<template>
  <div id="app">
    {{$store.state.count}}times count is {{evenOrOdd}}
    <br>
    <button @click="increment">+</button>
    <button @click="decrease">-</button>
    <button @click="incrementIfOdd">Increment If Odd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  computed: mapGetters(["evenOrOdd"]),
  methods: mapActions([
    "increment",
    "decrease",
    "incrementIfOdd",
    "incrementAsync"
  ]),
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
