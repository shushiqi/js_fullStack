<template>
  <div class="container">
    <button @click="sendMsg">发送</button>
  </div>
</template>

<script>
export default {
  name: "demo2",
  data() {
    return {
      message: "shushiqi"
    };
  },
  methods: {
    sendMsg() {
      this.$emit('wn', this.message)
    }
  }
};
</script>