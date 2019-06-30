<template>
  <div>
    <div id="head">
      <div id="head_left">
        <p id="hl_one">{{fenshu.food_score.toFixed(1)}}</p>
        <p id="hl_two">综合评价</p>
        <p id="hl_three">高于周边商家{{(fenshu.compare_rating*100).toFixed(1)}}%</p>
      </div>
      <div id="head_right">
        <p id="hr_one">
          <span id="hr_o_one">服务态度</span>
          <el-rate id="hr_o_two"
            v-model="fenshu.overall_score.toFixed(1)"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
        </p>
        <p id="hr_two">
          <span id="hr_t_one">服务态度</span>
          <el-rate id="hr_t_two"
            v-model="fenshu.service_score.toFixed(1)"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
        </p>
        <p id="hr_three">
          <span id="hr_th_one">送达时间</span>
          <span id="he_th_two">分钟</span>
        </p>
      </div>
    </div>
    <div id="center">
      <div :key="i" v-for="(v,i) in fenlei">{{v.name}}({{v.count}})</div>
    </div>
    <div id="bottom">
      <div class="bm" :key="i" v-for="(v,i) in pingjia">
        <div class="bm_one">
          <img class="bm_one_img" src="../../../static/imgs/my.png" alt="">
        </div>
        <div class="bm_two">
          <p class="bm_t_one">{{v.username}}</p>
          <p class="bm_t_two">
            <el-rate class="t_two_one"
              v-model="v.rating_star"
              disabled
              show-score
              text-color="#ff9900"
              score-template=""
            ></el-rate>
            <span class="t_two_two" v-if="v.time_spent_desc">{{v.time_spent_desc}}</span>
          </p>
          <div v-if="v.item_ratings.length>0">
              <img :src="'https://elm.cangdu.org/img/'+v.item_ratings[0].image_hash+'.jpeg'" alt="">
          </div>
          <div class="bm_four" v-if="v.item_ratings.length>0"><p class="bm_fo_one" :key="i2" v-for="(v2,i2) in v.item_ratings">{{v2.food_name}}</p>
          </div>
        </div>
        <div class="bm_end">
           <p class="bm_end_one">{{v.rated_at}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dppj",
  data() {
    return {
      id: "",
      fenshu: {},
      fenlei: {},
      pingjia: {}
    };
  },
  methods: {
    getid() {
      this.id = this.$store.state.dianpu.id;
      console.log(this.id);
    },
    getfenshu() {
      const api =
        "https://elm.cangdu.org/ugc/v2/restaurants/" +
        this.id +
        "/ratings/scores";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res.data);
        this.fenshu = res.data;
      });
    },
    getfenlei() {
      const api =
        "https://elm.cangdu.org/ugc/v2/restaurants/" +
        this.id +
        "/ratings/tags";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res.data);
        this.fenlei = res.data;
      });
    },
    getpingjia() {
      const api =
        "https://elm.cangdu.org/ugc/v2/restaurants/" + this.id + "/ratings";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res.data);
        this.pingjia = res.data;
      });
    }
  },
  created() {
    this.getid();
    this.getfenshu();
    this.getfenlei();
    this.getpingjia();
  }
};
</script>
<style scoped>
#head{
    overflow: hidden;
    padding: 0.1rem;
}
#head_left{
    float: left;
    text-align: center;
}
#head_left p{
    margin-top: 0.1rem;
}
#hl_one{
    font-size: 0.25rem;
}
#hl_two{
    font-size: 0.2rem;
}
#hl_three{
    font-size: 0.15rem;
}
#head_right{
    float: right;
}
#head_right p{
    margin-top: 0.1rem;
}
#hr_one{
    overflow: hidden;
}
#hr_o_one{
    float: left;
    font-size: 0.15rem;
}
#hr_o_two{
    float: right;
}
#hr_two{
    overflow: hidden;
}
#hr_t_one{
    float: left;
    font-size: 0.15rem;
}
#hr_t_two{
    float: right;
}
#hr_th_one{
    font-size: 0.15rem;
} 
#hr_th_two{
    margin-left: 0.1rem;
    font-size: 0.1rem;
}
#center{
    overflow: hidden;
}
#center div{
    margin-left: 0.1rem;
    font-size: 0.2rem;
    line-height: 0.3rem;
    margin-top: 0.1rem;
    float: left;
    background-color: aquamarine;
}
#center div:nth-child(1){
    background-color: blue;
}
#center div:nth-child(3){
    background-color: grey;
}
.bm{
    overflow: hidden;
    margin-top: 0.1rem;
    padding: 0.1rem;
    border-top: 1px solid black;
}
.bm_one{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    background-color: yellow;
}
.bm_one_img{
    width: 100%;
}
.bm_two{
    float: left;
    margin-left: 0.1rem;
}
.bm_t_one{
    font-size: 0.15rem;
}
.bm_t_two{
    overflow: hidden;
}
.t_two_one{
    float: left;
}
.t_two_two{
    float: left;
    font-size: 0.15rem;
}
.bm_four{
    overflow: hidden;
}
.bm_fo_one{
    width: 0.45rem;
    font-size: 0.15rem;
    line-height: 0.3rem;
    border: 1px solid black;
    margin-left: 0.1rem;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.bm_end{
    float: right;
}
.bm_end_one{
    font-size: 0.15rem;
}
</style>

