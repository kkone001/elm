<template>
  <div>
    <div id="head">
      <img @click="add()" id="head_one" src="../../../static/imgs/left.png" alt>
      <p id="head_two">订单列表</p>
    </div>
    <div id="top">
      <div class="center" :key="i" v-for="(v,i) in getddlb">
        <img class="img1" :src="'https://elm.cangdu.org/img/'+v.dianpu.image_path" alt>
        <div class="center_right">
          <div class="right_one">
            <div class="r_one_one">
              <div class="o_one_one">
                <p class="name">{{v.dianpu.name}}</p>
                <img class="right" src="../../../static/imgs/right.png" alt>
              </div>
              <p class="o_one_two">支付超时</p>
            </div>
            <p class="r_one_two">
              <span>{{v.shijian.nian}}-{{v.shijian.yue}}-{{v.shijian.ri}}</span>
              <span>{{v.shijian.shi}}:{{v.shijian.fen}}</span>
            </p>
          </div>
          <div class="right_two">
              <p class="r_two_one" :key="i1" v-for="(v1,i1) in v.caipin">{{v1.name}}</p>
              <p class="r_two_two">￥{{v.money+v.dianpu.float_delivery_fee+v.canhe}}</p>
          </div>
          <div class="right_three">
              <span @click="dpadd(v.dianpu)" class="r_three_one">再来一单</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ddlb",
  data() {
    return {};
  },
  methods: {
    add() {
      this.$router.back();
    },
    dpadd(v) {
      this.$store.commit("dianpuadd", v);
      this.$router.push({ name: "dianpu" });
    }
  },
  created() {},
  computed: {
    getddlb() {
      return this.$store.state.ddliebiao;
    },
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
#top {
  margin-top: 0.4rem;
  background-color: white;
}
.center{
    overflow: hidden;
    border-bottom: 1px solid gray;
}
.img1{
    width: 0.4rem;
    float: left;
    margin: 0.1rem;
}
.center_right{
    width: 2.95rem;
    float: right;
    margin: 0.1rem;
}
.name{
    font-size: 0.2rem;
    float: left;
}
.right{
    width: 0.2rem;
    float: left;
}
.o_one_one{
    overflow: hidden;
}
.o_one_two{
    font-size: 0.15rem;
}
.r_one_one{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.r_one_two{
    font-size: 0.15rem;
    line-height: 0.3rem;
}
.right_one{
    border-bottom: 1px solid gray;
}
.right_two{
    position: relative;
    border-bottom: 1px solid gray;
}
.r_two_one{
    font-size: 0.15rem;
    line-height: 0.3rem;
}
.r_two_two{
    font-size: 0.15rem;
    position: absolute;
    right: 0.1rem;
    bottom: 0.1rem;
}
.right_three{
    text-align: right;
}
.r_three_one{
    font-size: 0.15rem;
    line-height: 0.4rem;
    color: blue;
    border: 1px solid blue;
    border-radius: 5%;
}
</style>

