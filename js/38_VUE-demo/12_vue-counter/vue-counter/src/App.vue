<template>
  <div id="app">
    <Counter />
    <br>
    <Counter-brother />
  </div>
</template>

<script>
import Counter from "./components/counter";
import CounterBrother from "./components/counterBrother";

export default {
  name: "App",
  data() {
    return {
    };
  },
  methods: {
    
  },
  components: {
    Counter: Counter,
    CounterBrother: CounterBrother
  }
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
