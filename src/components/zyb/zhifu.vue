<template>
  <div>
    <div id="head">
      <img @click="add()" id="head_one" src="../../../static/imgs/left.png" alt>
      <p id="head_two">确认订单</p>
      <img v-if="$store.state.denglu==true" id="head_four" src="../../../static/imgs/my.png" alt="">
      <p @click="dl" v-if="$store.state.denglu==false" id="head_three">登陆/注册</p>
    </div>
    <div id="top" @click="asd()">
      <img id="top_one" src="../../../static/imgs/map.png" alt>
      <p v-if="getshdz.length==0" id="top_two">请添加一个收货地址</p>
      <div v-if="getshdz.length>0" id="top_two">
        <p><span id="p1">{{getshdz[0].name}}</span><span id="p2">{{getshdz[0].sex}}</span><span id="p3">{{getshdz[0].phone}}</span></p>
        <p><span id="p4">{{getshdz[0].dizhi}}</span><span id="p5">{{getshdz[0].xxdizhi}}</span></p>
      </div>
      <img id="top_three" src="../../../static/imgs/right.png" alt>
    </div>
    <div id="con">
      <div id="con_one">
        <p id="con_one_one">送达时间</p>
      </div>
      <div id="con_two">
        <p id="con_two_one">
          <span>尽快送达</span>
          <span>|</span>
          <span>预计</span>
          <span>40分钟</span>
        </p>
        <span id="con_two_two">蜂鸟专送</span>
      </div>
    </div>
    <div id="cen">
      <div id="cen_one">
        <p id="cen_one_one">支付方式</p>
        <div id="cen_one_two">
          <p id="cen_one_two_one">在线支付</p>
          <img id="cen_one_two_two" src="../../../static/imgs/right.png" alt>
        </div>
      </div>
      <div id="cen_two">
        <p id="cen_two_one">红包</p>
        <p id="cen_two_two">暂时只在饿了么APP中支持</p>
      </div>
    </div>
    <div id="bottom">
        <div id="bottom_one">
            <img id="bottom_one_one" :src="'https://elm.cangdu.org/img/'+dianpu.image_path" alt="">
            <p id="bottom_one_two">{{dianpu.name}}</p>
        </div>
        <div id="bottom_two">
            <div class="bottom_two_one" :key="i" v-for="(v,i) in gouwuche">
                <p class="bottom_two_one_one"><span>{{v.name}}</span><span v-if="v.two">-{{v.specs_name}}</span></p>
                <p class="bottom_two_one_two"><span>X{{v.original_price}}</span><span>￥{{v.price}}</span></p>
            </div>
            <div id="bottom_two_two">
                <p id="bottom_two_two_one">餐盒</p>
                <p id="bottom_two_two_two">￥{{a}}</p>
            </div>
            <div id="bottom_two_three">
                <p id="bottom_two_three_one">配送费</p>
                <p id="bottom_two_three_two">￥{{dianpu.float_delivery_fee}}</p>
            </div>
        </div>
        <div id="bottom_three">
            <div id="bottom_three_one">
                <p id="bottom_three_one_one">订单￥{{nums3+a+dianpu.float_delivery_fee}}</p>
                <p id="bottom_three_one_two">待支付</p>
            </div>
            <div id="bottom_three_two">
                <p id="bottom_three_two_one">￥{{nums3+a+dianpu.float_delivery_fee}}</p>
            </div>
        </div>
    </div>
    <div id="end">
        <div @click="beizhu()" id="end_one">
            <p id="end_one_one">订单备注</p>
            <div id="end_one_two">
                <p id="end_one_two_one">口味、偏好等</p>
                <img id="end_one_two_two" src="../../../static/imgs/right.png" alt="">
            </div>
        </div>
        <div @click="fapiao()" id="end_two">
            <p id="end_two_one">发票抬头</p>
            <div id="end_two_two">
                <p id="end_two_two_one">不需要发票</p>
                <img id="end_two_two_two" src="../../../static/imgs/right.png" alt="">
            </div>
        </div>
    </div>
    <div id="over">
        <div id="over_one">
            <p id="over_one_one"><span>待支付</span><span>￥{{nums3+a+dianpu.float_delivery_fee}}</span></p>
        </div>
        <div @click="qaq()" id="over_two">
            <p id="over_two_one">确认下单</p>
        </div>
    </div>
  </div>
</template>
<script scoped>
export default {
  name: "zhifu",
  data() {
    return {
      dianpu:{},
      a:100
    };
  },
  methods: {
    qaq(){
      if(this.$store.state.shdz.length==0){
        alert("请选择收货地址");
        return;
      }
      var a = new Date();
      var c = 0;
      for (var i = 0; i < this.gouwuche.length; i++) {
        c += this.gouwuche[i].price;
      }
      var obj = {
        dianpu:this.dianpu,
        caipin:this.gouwuche,
        shenfen:this.getshdz,
        canhe:this.a,
        money:c,
        shijian:{
          nian:a.getFullYear(),
          yue:a.getMonth(),
          ri:a.getDate(),
          shi:a.getHours(),
          fen:a.getMinutes(),
          miao:a.getSeconds()
        },
      }
      this.$store.commit("setddliebiao",obj);
      this.$store.commit("czspshujuadd");
      this.$router.push({name:"ddlb"});
    },
    beizhu(){
      this.$router.push({name:"ddbz"});
    },
    fapiao(){
      this.$router.push({name:"fptt"});
    },
    dl(){
      this.$router.push({name:"login2"});
    },
    asd(){
      this.$router.push({name:"xzdz"});
    },
    add() {
      this.$router.back();
    },
    getdianpu() {
      this.dianpu = this.$store.state.dianpu;
    }
  },
  created() {
    this.getdianpu();
  },
  computed: {
    gouwuche() {
      var arr = [];
      for (var i = 0; i < this.$store.state.spshuju.length; i++) {
        for (var k = 0; k < this.$store.state.spshuju[i].foods.length; k++) {
          for (
            var g = 0;
            g < this.$store.state.spshuju[i].foods[k].specfoods.length;
            g++
          ) {
            if (
              this.$store.state.spshuju[i].foods[k].specfoods[g]
                .original_price > 0 &&
              this.$store.state.spshuju[i].foods[k].specfoods.length > 1
            ) {
              this.$store.state.spshuju[i].foods[k].specfoods[g].two = true;
              arr.push(this.$store.state.spshuju[i].foods[k].specfoods[g]);
            }
            if (
              this.$store.state.spshuju[i].foods[k].specfoods[g]
                .original_price > 0 &&
              this.$store.state.spshuju[i].foods[k].specfoods.length == 1
            ) {
              arr.push(this.$store.state.spshuju[i].foods[k].specfoods[g]);
            }
          }
        }
      }
      this.arr2 = arr;
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
    getshdz(){
            return this.$store.state.shdz;
        }
  }
};
</script>
<style scoped>
#head {
  width: 100%;
  height: 0.4rem;
  position: fixed;
  left: 0;
  top: 0;
  background-color: blue;
}
#head_one {
  width: 0.2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
#head_two {
  font-size: 0.2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#head_three {
  font-size: 0.2rem;
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
}
#head_four {
  width: 0.2rem;
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
}
#top {
    margin-top: 0.5rem;
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}
#top_one {
  width: 0.2rem;
  margin-left: 0.1rem;
}
#top_two {
  font-size: 0.2rem;
}
#top_three {
  width: 0.2rem;
  margin-right: 0.1rem;
}
#con {
  height: 0.8rem;
  border-left: 5px solid blue;
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
}
#con_one_one {
  font-size: 0.2rem;
}
#con_two {
  text-align: right;
  font-size: 0.15rem;
  line-height: 0.3rem;
}
#con_two_one span {
  margin-left: 0.1rem;
  color: blue;
}
#con_two_two {
  background-color: blue;
  color: white;
}
#cen {
  margin-top: 0.1rem;
  background-color: white;
}
#cen_one {
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
}
#cen_one_one {
  margin-left: 0.1rem;
  font-size: 0.2rem;
}
#cen_one_two {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 0.1rem;
}
#cen_one_two_one {
  font-size: 0.15rem;
}
#cen_one_two_two {
  width: 0.2rem;
}
#cen_two {
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#cen_two_one {
  font-size: 0.15rem;
  margin-left: 0.1rem;
}
#cen_two_two {
  font-size: 0.15rem;
  margin-right: 0.1rem;
}
#bottom{
    margin-top: 0.1rem;
    background-color: white;
}
#bottom_one{
    height: 0.5rem;
    display: flex;
    align-items: center;
}
#bottom_one_one{
    width: 0.3rem;
    margin-left: 0.1rem;
}
#bottom_one_two{
    font-size: 0.2rem;
    margin-left: 0.1rem;
}
#bottom_two{
    border-bottom: 1px solid gray;
}
#bottom_two p{
    line-height: 0.3rem;
}
.bottom_two_one{
    font-size: 0.15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bottom_two_one_one span:nth-child(1){
    margin-left: 0.1rem;
}
.bottom_two_one_two span{
    margin-right: 0.1rem;
}
.bottom_two_one_two span:nth-child(1){
    color: red;
}
#bottom_two_two{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#bottom_two_three{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#bottom_two_two_one,#bottom_two_three_one,#bottom_three_one_one{
    font-size: 0.15rem;
    margin-left: 0.1rem;
}
#bottom_two_two_two,#bottom_two_three_two,#bottom_three_one_two{
    font-size: 0.15rem;
    margin-right: 0.1rem;
}
#bottom_three p{
    line-height: 0.3rem;
}
#bottom_three_one{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#bottom_three_two_one{
    font-size: 0.15rem;
    text-align: right;
    margin-right: 0.1rem;
}
#over{
    width: 100%;
    height: 0.5rem;
    position: fixed;
    left: 0;
    bottom: 0;
    overflow: hidden;
}
#over_one{
    height: 0.5rem;
    width: 70%;
    float: left;
    background-color: gray;
}
#over_one_one{
    font-size: 0.2rem;
    line-height: 0.5rem;
    color: white;
    margin-left: 0.1rem;
}
#over_two{
    height: 0.5rem;
    width: 30%;
    float: right;
    text-align: center;
    background-color: greenyellow;
}
#over_two_one{
    font-size: 0.2rem;
    line-height: 0.5rem;
    color: white;
}
#end{
    margin-top: 0.1rem;
    background-color: white;
    margin-bottom: 0.6rem;
}
#end_one,#end_two{
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#end_one_one,#end_two_one{
    margin-left: 0.1rem;
}
#end_one_two,#end_two_two{
    margin-right: 0.1rem;
}
#end_one_two,#end_two_two{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#end_one_two_two,#end_two_two_two{
    width: 0.2rem;
}
#p1{
  font-size: 0.2rem;
}
#p2{
  font-size: 0.15rem;
  margin-left: 0.1rem;
}
#p3{
  font-size: 0.15rem;
  margin-left: 0.1rem;
}
#p4{
  font-size: 0.15rem;
  background-color: red;
  color: white;
}
#p5{
  font-size: 0.15rem;
  margin-left: 0.1rem;
}
</style>

