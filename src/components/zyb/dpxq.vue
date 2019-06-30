<template>
  <div>
    <div id="head">
      <img id="head_one" @click="acc()" src="../../../static/imgs/left.png" alt>
      <p id="head_two">商家详情</p>
    </div>
    <div id="top">
      <div id="top_one">
        <p>活动与属性</p>
      </div>
      <div id="top_two">
        <p :key="i" v-for="(v,i) in jiekou.supports">
          <span>{{v.icon_name}}</span>
          <span>{{v.description}}(APP专享)</span>
        </p>
      </div>
    </div>
    <div id="center">
      <div  @click="abc()" id="center_one">
        <div id="co_left">
          <p>食品监督安全公示</p>
        </div>
        <div id="co_right">
          <span>企业认证详情</span>
          <img src="../../../static/imgs/right.png" alt>
        </div>
      </div>
      <div id="center_two">
        <div id="ct_one">
          <span>监督检查结果:</span>
          <span v-if="this.jiekou.rating>=4">优</span>
          <span v-if="this.jiekou.rating>=3&&this.obj.rating<4">良好</span>
          <span v-if="this.jiekou.rating>=2&&this.obj.rating<3">一般</span>
          <span v-if="this.jiekou.rating>=1&&this.obj.rating<2">差</span>
          <span v-if="this.jiekou.rating>=0&&this.obj.rating<1">极差</span>
        </div>
        <div id="ct_two">
          <span>检查日期:</span>
          <span>2019.6.1</span>
        </div>
      </div>
    </div>
    <div id="bottom_one">
      <p>商家信息</p>
    </div>
    <div id="bottom_two">
      <p>{{jiekou.name}}</p>
    </div>
    <div id="bottom_three">
      <span>地址:</span>
      <span>{{jiekou.address}}</span>
    </div>
    <div id="bottom_four">
      <span>营业时间:</span>
      <span>[{{jiekou.opening_hours[0]}}]</span>
    </div>
    <div id="bottom_five">
      <p>营业执照</p>
      <img src="../../../static/imgs/right.png" alt>
    </div>
    <div id="bottom_six">
      <p>餐饮服务许可证</p>
      <img src="../../../static/imgs/right.png" alt>
    </div>
  </div>
</template>
<script>
export default {
  name: "dpxq",
  data() {
    return {
      xpobj: {},
      jiekou: {}
    };
  },
  methods: {
    abc(){
      this.$router.push({name:'spaq',query:this.jiekou});
    },
    acc() {
      this.$router.back();
    },
    answer() {
      this.obj = this.$store.state.dianpu;
    },
    getxq() {
      const api = "https://elm.cangdu.org/shopping/restaurant/" + this.obj.id;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res.data);
        this.jiekou = res.data;
      });
    }
  },
  created() {
    this.answer();
    this.getxq();
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
  overflow: hidden;
}
#head_one {
  width: 0.2rem;
  float: left;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
}
#head_two {
  font-size: 0.2rem;
  color: white;
  text-align: center;
  line-height: 0.4rem;
}
#top {
  margin-top: 0.5rem;
}
#top_one {
  height: 0.4rem;
  background-color: white;
}
#top_one p {
  font-size: 0.2rem;
  line-height: 0.4rem;
  margin-left: 0.1rem;
}
#top_two {
  margin-top: 2px;
  background-color: white;
  padding: 0.1rem;
}
#top_two p {
  line-height: 0.3rem;
}
#top_two > p span:nth-child(2) {
  margin-left: 0.1rem;
}
#top_two > p span:nth-child(1) {
  background-color: gray;
  color: white;
}
#center_one {
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-top: 0.1rem;
}
#co_left p {
  margin-left: 0.1rem;
  font-size: 0.2rem;
}
#co_right {
  display: flex;
  align-items: center;
}
#co_right span {
  font-size: 0.2rem;
  color: gray;
}
#co_right img {
  width: 0.2rem;
  margin-right: 0.1rem;
}
#center_two {
  margin-top: 2px;
  background-color: white;
}
#center_two span {
  font-size: 0.15rem;
  line-height: 0.5rem;
  margin-left: 0.1rem;
}
#bottom_one {
  margin-top: 0.1rem;
  background-color: white;
  margin-top: 0.1rem;
}
#bottom_one p {
  font-size: 0.2rem;
  margin-left: 0.1rem;
  line-height: 0.4rem;
}
#bottom_two {
  margin-top: 1px;
  background-color: white;
}
#bottom_two p {
  font-size: 0.15rem;
  margin-left: 0.1rem;
  line-height: 0.4rem;
}
#bottom_three {
  margin-top: 1px;
  background-color: white;
}
#bottom_three span {
  font-size: 0.15rem;
  margin-left: 0.1rem;
  line-height: 0.4rem;
}
#bottom_four {
  margin-top: 1px;
  background-color: white;
}
#bottom_four span {
  font-size: 0.15rem;
  margin-left: 0.1rem;
  line-height: 0.4rem;
}
#bottom_five {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1px;
  background-color: white;
}
#bottom_five p {
  font-size: 0.15rem;
  margin-left: 0.1rem;
  line-height: 0.4rem;
}
#bottom_five img {
  width: 0.2rem;
}
#bottom_six {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1px;
  background-color: white;
}
#bottom_six p {
  font-size: 0.15rem;
  margin-left: 0.1rem;
  line-height: 0.4rem;
}
#bottom_six img {
  width: 0.2rem;
}
</style>

