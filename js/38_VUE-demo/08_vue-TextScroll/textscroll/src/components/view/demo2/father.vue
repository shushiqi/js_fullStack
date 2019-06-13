<template>
  <div class="container">
    <child @wn='getWn'>
      {{msg}}
    </child>
  </div>
</template>

<script>
import demo2 from "./child";
export default {
  name: "demo2",
  data() {
    return {
      msg: ''
    };
  },
  components: {
    demo2
  },
  methods: {
    getWn(data){
      this.msg = data
    }
  },
};
</script>