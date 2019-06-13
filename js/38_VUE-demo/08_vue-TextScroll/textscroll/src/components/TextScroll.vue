<template>
  <section>
    <div class="textScroll">
      <transition-group tag="ul" :name="scrollType">
        <li v-for="(item, index) in dataList" :key="index+0" v-show="index === count">
          <p>{{item.text}}</p>
        </li>
      </transition-group>
    </div>
  </section>
</template>

<script>
import { setInterval } from "timers";
export default {
  data() {
    return {
      count: 0,
     
    };
  },
  props: ["scrollType", "dataList"],
  created() {
    let len = this.dataList.length;
    setInterval(() => {
      if(this.count ===len-1){
        this.count = 0
      }else{
        this.count++
      }
    }, 2000);
  }
}
</script>

<style>
ul {
  margin: 5px 0;
  padding: 0;
  background-color: #ffffff;
  overflow: hidden;
  height: 40px;
}
li {
  height: 40px;
  list-style-type: none;
  line-height: 1;
}

/* 从上滚动 */
.scroll-up-enter-active {
  transition: all 1s ease;
}
.scroll-up-leave-active {
  transition: all 1s ease;
}
.scroll-up-enter {
  transform: translate3d(0, 100%, 0);
}
.scroll-up-leave-to {
  transform: translate3d(0, -100%, 0);
}

/* 从左滚动 */
.scroll-left-enter-active {
  transition: all 1s ease;
}
.scroll-left-leave-active {
  transition: all 1s ease;
}
.scroll-left-enter {
  transform: translate3d(100%, 0, 0);
}
.scroll-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}
</style>