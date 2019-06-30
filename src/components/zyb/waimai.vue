<template>
  <div>
    <div id="head">
      <img @click="abc()" id="head_left" src="../../../static/imgs/fangdajing.png" alt />
      <p id="head_center">{{name}}</p>
      <img v-if="denglu" id="head_right" src="../../../static/imgs/my.png" alt />
      <span @click="dladd()" v-else id="head_right2">登陆/注册</span>
    </div>
    <div id="top">
      <swiper v-if="fenlei.length > 0" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="top_flmk" v-show="fenlei.length > 0" :key="i" v-for="(v,i) in fenlei">
          <div @click="arr(value)" class="top_spfl" :key="index" v-for="(value,index) in v">
            <img :src="'https://fuss10.elemecdn.com'+value.image_url" alt />
            <p id="top_title">{{value.title}}</p>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      </swiper>
    </div>
    <div id="center">
      <div id="center_fjsj">
        <img id="center_img1" src="../../../static/imgs/Group-.png" alt />
        <span>附近商家</span>
      </div>
    </div>
    <ul v-if="shangpus.length > 0" id="bottom">
      <li class="sp" :key="i" v-for="(v,i) in shangpus" @click="dpadd(v)">
        <img class="sp_left" :src="'https://elm.cangdu.org/img/'+v.image_path" alt />
        <div class="sp_right">
          <div class="r_one">
            <div class="one_left">
              <span class="one_pinpai">品牌</span>
              <span class="one_name">{{v.name}}</span>
            </div>
            <div class="one_right">
              <span class="one_text" :key="i" v-for="(v,i) in v.supports">{{v.icon_name}}</span>
            </div>
          </div>
          <div class="r_two">
            <div class="two_left">
              <el-rate
                class="two_pf"
                v-model="v.rating"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate>
              <span class="two_num">月售{{v.recent_order_num}}单</span>
            </div>
            <div class="two_right">
              <span class="two_fn">{{v.delivery_mode.text}}</span>
              <span class="two_zsd">{{v.supports[1].name}}</span>
            </div>
          </div>
          <div class="r_three">
            <div class="three_left">
              <span class="three_qsf">￥{{v.float_minimum_order_amount}}起送</span>
              <span class="three_xx">/</span>
              <span class="three_psf">{{v.piecewise_agent_fee.tips}}</span>
            </div>
            <div class="three_right">
              <span class="three_jl">{{v.distance}}</span>
              <span class="three_xx2">/</span>
              <span class="three_sj">{{v.order_lead_time}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { Loading } from "element-ui";
import { mapState } from "vuex";
export default {
  name: "waimai",
  data() {
    return {
      latitude: "",
      longitude: "",
      name: "",
      value: 1,
      fenlei: [],
      shangpus: [],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数  swiper4.x
        // ...
        // autoplay:true,
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      },
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      loading: true
    };
  },
  computed: {
    ...mapState(["denglu"])
  },
  created() {
    this.add();
    this.getRess();
    this.fenlei2();
    this.getSj();
  },
  methods: {
    arr(v) {
      console.log(v);
      this.$store.commit("getarr", v);
    },
    getRess() {
      const api =
        "https://elm.cangdu.org/v2/pois/" +
        this.latitude +
        "," +
        this.longitude;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.name = res.data.name;
      });
    },
    fenlei2() {
      const api = "https://elm.cangdu.org/v2/index_entry";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        const one = [];
        const two = [];
        for (let i = 0; i < res.data.length; i++) {
          if (i < 8) {
            one.push(res.data[i]);
          } else {
            two.push(res.data[i]);
          }
        }
        this.fenlei.push(one);
        this.fenlei.push(two);
      });
    },
    getSj() {
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.latitude +
        "&longitude=" +
        this.longitude;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.shangpus = res.data;
      });
    },
    add() {
      this.latitude = this.$store.state.waimai_wz.latitude;
      this.longitude = this.$store.state.waimai_wz.longitude;
    },
    abc() {
      return;
      this.$router.push({ name: "sousuo" });
    },
    dladd() {
      this.$router.push({ name: "login2" });
    },
    dpadd(v) {
      this.$store.commit("dianpuadd", v);
      this.$router.push({ name: "dianpu" });
    }
  }
};
</script>
<style scoped>
#head {
  width: 100%;
  height: 0.4rem;
  background-color: blue;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}
#head_left {
  width: 0.2rem;
  margin-left: 0.1rem;
}
#head_center {
  width: 50%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.2rem;
  color: white;
}
#head_right {
  width: 0.2rem;
  margin-right: 0.1rem;
}
#head_right2 {
  font-size: 0.15rem;
  margin-right: 0.1rem;
  color: white;
}
#top {
  margin-top: 0.5rem;
  background-color: white;
}
#top_title {
  font-size: 0.15rem;
}
#center {
  background-color: white;
  margin-top: 0.1rem;
}
#center_fjsj {
  overflow: hidden;
  height: 0.3rem;
  display: flex;
  align-items: center;
}
#center_fjsj span {
  font-size: 0.15rem;
}
#center_img1 {
  float: left;
  width: 0.2rem;
  margin-left: 0.1rem;
}
#bottom {
  background-color: white;
}
.top_flmk {
  display: flex;
  flex-wrap: wrap;
}
.top_spfl {
  width: 25%;
  margin-bottom: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top_spfl img {
  width: 0.5rem;
}
.sp {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sp_left {
  width: 0.5rem;
  margin-left: 0.1rem;
}
.sp_right {
  width: 2.95rem;
  margin-right: 0.1rem;
}
.r_one {
  overflow: hidden;
}
.one_left {
  float: left;
}
.one_right {
  float: right;
}
.one_pinpai {
  font-size: 0.12rem;
  background-color: yellow;
}
.one_name {
  font-size: 0.15rem;
}
.one_text {
  font-size: 0.1rem;
  border: 0.05px solid grey;
  margin-left: 0.02rem;
}
.r_two {
  overflow: hidden;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
.two_left {
  float: left;
  overflow: hidden;
}
.two_right {
  float: right;
}
.two_pf {
  float: left;
}
.two_num {
  font-size: 0.1rem;
  float: left;
}
.two_fn {
  font-size: 0.1rem;
  background-color: blue;
  color: white;
}
.two_zsd {
  font-size: 0.1rem;
  color: blue;
}
.r_three {
  overflow: hidden;
}
.three_left {
  float: left;
}
.three_right {
  float: right;
}
.three_qsf {
  font-size: 0.1rem;
}
.three_xx {
  font-size: 0.1rem;
}
.three_psf {
  font-size: 0.1rem;
}
.three_jl {
  font-size: 0.1rem;
}
.three_xx2 {
  font-size: 0rem;
}
.three_sj {
  font-size: 0.1rem;
}
</style>

