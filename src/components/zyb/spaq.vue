<template>
  <div id="wrap">
    <div id="head">
      <img @click="aaa()" id="head_one" src="../../../static/imgs/left.png" alt="">
      <p id="head_two">食品监督安全公式</p>
    </div>
    <div id="top">
      <div id="top_one">
        <p>食品监督安全公示</p>
      </div>
      <div id="top_two">
        <img id="to_tw_one" src="../../../static/imgs/my.png" alt="">
        <div id="to_tw_two">
          <p id="tw_tw_one">
            <span>监督检查结果:</span>
            <span v-if="this.obj.rating>=4">优</span>
            <span v-if="this.obj.rating>=3&&this.obj.rating<4">良好</span>
            <span v-if="this.obj.rating>=2&&this.obj.rating<3">一般</span>
            <span v-if="this.obj.rating>=1&&this.obj.rating<2">差</span>
            <span v-if="this.obj.rating>=0&&this.obj.rating<1">极差</span>
          </p>
          <p id="tw_tw_two">检查日期:</p>
        </div>
      </div>
    </div>
    <div id="center">
      <div id="cen_one">
        <p>工商登记信息</p>
      </div>
      <div id="cen_two">
        <p>企业名称</p>
        <p>工商执照注册号</p>
        <p>注册资本</p>
        <p>注册地址</p>
        <p>属地监管所</p>
        <p>法定代表人</p>
        <p>经营范围</p>
      </div>
    </div>
    <div id="bottom">
      <div id="bot_one">
        <p>餐饮许可证</p>
      </div>
      <div id="bot_two">
        <p>营业范围</p>
        <p>许可证有效期</p>
        <p>许可证号</p>
        <p>发证时间</p>
        <p>发证机关</p>
      </div>
    </div>
    <div id="end">
      <p id="end_one">许可证书</p>
      <img id="end_two" src="../../../static/imgs/dingdan.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "dpsp",
  data() {
    return {
      obj:{}
    };
  },
  methods: {
    aaa(){
      this.$router.back();
    }
  },
  created() {
    this.obj = this.$route.query;
    console.log(this.obj);
  },
  computed: {

  }
};
</script>
<style scoped>
#head{
  height: 0.4rem;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: blue;
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
#top{
  background-color: white;
}
#top_one p{
  font-size: 0.2rem;
  line-height: 0.3rem;
  margin-left: 0.1rem;
}
#top_two{
  border-top: 1px solid gray;
  overflow: hidden;
}
#to_tw_one{
  width: 0.5rem;
  float: left;
  margin: 0.1rem;
}
#to_tw_two{
  float: left;
}
#tw_tw_one{
  font-size: 0.15rem;
  margin-top: 0.1rem;
}
#tw_tw_one span:nth-child(2){
  margin-left: 0.1rem;
}
#tw_tw_two{
  font-size: 0.15rem;
  margin-top: 0.1rem;
}
#center{
  margin-top: 0.1rem;
  background-color: white;
}
#cen_one p{
  font-size: 0.2rem;
  margin-left: 0.1rem;
  line-height: 0.3rem;
}
#cen_two{
  border-top: 1px solid gray;
}
#cen_two p{
 font-size: 0.15rem;
 margin-left: 0.1rem;
 line-height: 0.3rem;
}

#bottom{
  margin-top: 0.1rem;
  background-color: white;
}
#bot_one p{
  font-size: 0.2rem;
  margin-left: 0.1rem;
  line-height: 0.3rem;
}
#bot_two{
  border-top: 1px solid gray;
}
#bot_two p{
 font-size: 0.15rem;
 margin-left: 0.1rem;
 line-height: 0.3rem;
}
#end{
  background-color: white;
  margin-top: 0.1rem;
}
#end_one{
  font-size: 0.2rem;
  margin-left: 0.1rem;
}
#end_two{
  width: 1rem;
}
</style>

