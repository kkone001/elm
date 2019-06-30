<template>
  <div>
    <div id="head">
      <img @click="back()" id="head_one" src="../../../static/imgs/left.png" alt>
      <p id="head_two">{{cp.name}}</p>
    </div>
    <div id="center">
      <img id="center_one" :src="cp.image_path" alt>
    </div>
    <div id="bottom">
      <p id="bottom_one">{{cp.description}}</p>
      <p id="bottom_two">{{cp.name}}</p>
      <div id="bottom_three">
        <p b_t_one>评分</p>
        <el-rate id="b_t_two" v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
      </div>
      <p id="bottom_four"><span id="b_four_one">月售</span><span id="b_four_two">{{cp.month_sales}}</span><span id="b_four_three">售价</span><span id="b_four_four">￥{{cp.specfoods[0].price}}起</span></p>
      <p id="bottom_five"><span id="b_five_one">评论数</span><span id="b_five_two">{{cp.rating_count}}</span><span id="b_five_three">好评率</span><span id="b_five_four">{{cp.satisfy_rate}}%</span></p>
    </div>
    <div id="end">
      <div id="end_left">
        <div id="end_one">
          <img v-if="nums2>0" src="../../../static/imgs/waimai.png" alt="">
          <img v-if="nums2<=0" src="../../../static/imgs/my.png" alt="">
          <p v-if="nums2>0" id="end_one_one">{{nums2}}</p>
        </div>
        <div id="end_two">
          <p id="e_t_one">￥{{nums3}}</p>
          <p id="e_t_two">配送费￥5</p>
        </div>
      </div>
      <div v-if="nums3<20" id="end_right">
        <p>还差￥{{20-nums3}}起送</p>
      </div>
      <div id="end_right" v-if="nums3>=20">
        <p @click="abc()">去结算</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Loading } from "element-ui";
export default {
  name: "canpin",
  data() {
    return {
        value:"",
        cp: {}
    };
  },
  methods: {
    abc(){
      this.$router.push({name:"zhifu"});
    },
      back(){
          this.$router.back();
      },
    cps() {
      this.cp = this.$store.state.canpin;
      this.value = this.cp.rating;
      console.log(this.cp);
    }
  },
  created() {
    this.cps();
  },
  computed: {
    nums2() {
      var arr = 0;
      for (var i = 0; i < this.$store.state.spshuju.length; i++) {
        var acc = 0;
        for (var k = 0; k < this.$store.state.spshuju[i].foods.length; k++) {
          for (var g = 0; g < this.$store.state.spshuju[i].foods[k].specfoods.length; g++) {
            acc += this.$store.state.spshuju[i].foods[k].specfoods[g].original_price;
          }
        }
        arr += acc;
      }
      return arr;
    },
    nums3() {
      var arr = 0;
      for (var i = 0; i < this.$store.state.spshuju.length; i++) {
        var acc = 0;
        for (var k = 0; k < this.$store.state.spshuju[i].foods.length; k++) {
          for (var g = 0; g < this.$store.state.spshuju[i].foods[k].specfoods.length; g++) {
            acc +=
            this.$store.state.spshuju[i].foods[k].specfoods[g].original_price *
            this.$store.state.spshuju[i].foods[k].specfoods[g].price;
            
          }
        }
        arr += acc;
      }
      return arr;
    },
  }
};
</script>
<style scoped>
#head{
    width: 100%;
    height: 0.4rem;
    background-color: blue;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    position: relative;
}
#head_one{
    width: 0.2rem;
    margin: 0.1rem;
}
#head_two{
    font-size: 0.2rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
#center{
    width: 90%;
    margin-left: 5%;
    margin-top: 0.1rem;
    background-color: yellow;
}
#center_one{
    width: 100%;
}
#bottom{
    margin-top: 0.1rem;
}
#bottom_one{
    font-size: 0.15rem;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
}
#bottom_two{
    font-size: 0.2rem;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
}
#bottom_three{
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
#b_t_one{
    margin-left: 0.1rem;
}
#b_t_two{
    margin-left: 0.1rem;
}
#bottom_four{
    margin-top: 0.1rem;
}
#bottom_four span{
    font-size: 0.15rem;
    margin-left: 0.1rem;
}
#bottom_five{
    margin-top: 0.1rem;
}
#bottom_five span{
    font-size: 0.15rem;
    margin-left: 0.1rem;
}
#end{
  width: 100%;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  z-index: 5;
}
#end_left{
  width: 65%;
  height: 100%;
  background-color: yellow;
  position: relative;
}
#end_right{
  width: 35%;
  background-color: greenyellow;
  text-align: center;
}
#end_right p{
  font-size: 0.2rem;
  line-height: 0.5rem;
}
#end_one{
  width: 0.6rem;
  height: 0.6rem;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: -0.2rem;
  left: 0.2rem;
  position: relative;
}
#end_one img{
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  left: 0.15rem;
  top:0.15rem;
}
#end_one_one{
  font-size: 0.15rem;
  position: absolute;
  right: 0;
  top: 0;
  background-color: red;
  color: white;
}
#end_two{
  position: absolute;
  height: 100%;
  left: 0.9rem;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
#e_t_one{
  font-size: 0.2rem;
}
#e_t_two{
  font-size: 0.1rem;
}
</style>

