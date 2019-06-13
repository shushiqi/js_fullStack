<template>
  <section class="helloWorld">
    <div class="scroll-box">
      <TextScroll :data-list="data" scrollType="scroll-up"></TextScroll>
    </div>
    <div class="scroll-box">
      <TextScroll :data-list="data" scrollType="scroll-left"></TextScroll>
    </div>
  </section>
</template>

<script>
import TextScroll from "./TextScroll"

export default {
  data() {
    return {
      data: [
        { text: "shushiqi" },
        { text: "hashimotokanna" },
        { text: "A_Seagull" }
      ]
    };
  },
  components: {
    TextScroll
  }
};
</script>

<style>
.helloWorld {
  width: 300px;
  background-color: #f9f9f9;
  border: 1px solid #e7e8e9;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
}
.scroll-box {
  background-color: #f9f9f9;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
}
</style>
