<template>
  <div class = "counter">
    <span class="text" ref='countup'></span>
    <div class="options">
      <label for="start">开始</label>
      <input v-model.number="start1" id="start" />
      <label for="end">结束</label>
      <input v-model.number="end1" id="end" />
      <label for="duration">时间</label>
      <input v-model.number="duration1" id="duration" />
    </div>
    <button @click="startUp()">开始</button>
  </div>
</template>

<script>
import {CountUp} from 'countup.js'
export default {
  name: "kcounter", 
  data () {
    return {
      numAnim:null,
      start1: this.start,
      end1: this.end,
      duration1: this.duration
    }
  },
  props: {
    autoplay: {
      type: Boolean,
      required: false,
      default: true
    },
    start: {
      type: Number,
      default: 0
    },
    end: {
      type: Number,
      default: 2019
    },
    duration: {
      type: Number,
      default: 2.5
    }
  },
  mounted(){
    if (this.autoplay)
      this.startUp()
  },
  methods:{
    startUp() {
      this.numAnim = new CountUp(this.$refs.countup, this.end1, {startVal: this.start1, duration: this.duration1})
      this.numAnim.start();
    }
  }
}
</script>

<style lang="stylus" scoped>
.text 
  display block
  font-size 250%

input 
  margin-right 10px

button
    margin-top 10px
    width 80px
    height 40px
</style>
