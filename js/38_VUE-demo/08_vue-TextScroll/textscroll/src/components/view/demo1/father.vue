<template>
  <div class="container">
    <child :send-msg="message" :send-date="date" :send-age="age"></child>
  </div>
</template>

<script>
import demoChild from "./child";
export default {
  name: "demo1",
  data() {
    return {
      message: "shushiqi",
      date: '2019-6-11',
      age: '18'
    };
  },
  components: {
    demoChild
  }
};
</script>