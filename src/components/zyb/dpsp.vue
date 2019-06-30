<template>
  <div id="wrap">
    <p v-if="tishi" :style="yangshi" id="tishi">多规格商品只能去购物车删除哦</p>
    <div v-if="yf" id="yeal">
      <div id="yeal_one">
        <span id="y_o_one">{{guige.name}}</span>
        <el-button @click.stop="bbb()" id="y_o_two" type="danger" icon="el-icon-close" circle></el-button>
      </div>
      <div id="yeal_two">
        <p id="y_t_one">规格</p>
        <p id="y_t_two">
          <span class="and" @click="www(vz,iz)" :key="iz" v-for="(vz,iz) in guige.specfoods">{{vz.specs_name}}</span>
        </p>
      </div>
      <div id="yeal_three">
        <p id="y_h_one">￥{{one.price}}</p>
        <p @click="jiaru()" id="y_h_two">加入购物车</p>
      </div>
    </div>
    <div id="left">
      <div @click="change(ia)" class="left_one" :key="ia" v-for="(va,ia) in obj2">
        <a :href="'#a'+va.id">{{va.name}}</a>
        <p class="left_two" v-if="nums[ia]>0">{{nums[ia]}}</p>
      </div>
    </div>
    <div id="right">
      <div :key="i" v-for="(v,i) in obj2">
        <div class="r_one">
          <p class="o_maodian" :id="'a'+v.id">{{v.name}}</p>
          <p class="o_title">{{v.description}}</p>
          <el-popover
            class="o_ddd"
            placement="bottom"
            title
            width="200"
            trigger="click"
            :content="v.name+' '+v.description"
          >
            <el-button slot="reference">...</el-button>
          </el-popover>
        </div>
        <div @click="zzz(value)" class="r_t_wrap" :key="index" v-for="(value,index) in v.foods">
          <div
            class="xin"
            v-if="(value.attributes.length>0 && value.attributes[0] && value.attributes[0].icon_color=='5ec452')||(value.attributes.length>1 && value.attributes[1] && value.attributes[1].icon_color=='5ec452')"
          >
            <p
              class="xinpin"
              v-if="value.attributes.length>0 && value.attributes[0] && value.attributes[0].icon_color=='5ec452'"
            >新品</p>
            <p
              class="xinpin"
              v-if="value.attributes.length>1 && value.attributes[1] && value.attributes[1].icon_color=='5ec452'"
            >新品</p>
          </div>
          <div class="wrap_one">
            <img class="wrap_img1" :src="value.image_path" alt>
          </div>
          <div class="wrap_two">
            <p class="two_one">{{value.name}}</p>
            <p class="two_two">{{value.description}}</p>
            <p class="two_three">
              <span>月售{{value.month_sales}}</span>
              <span>好评率{{value.satisfy_rate}}%</span>
            </p>
            <span class="two_four" v-if="value.activity">{{value.activity.image_text}}</span>
            <p class="two_five">
              <span>￥{{value.specfoods[0].price}}</span>
              <span v-if="index<2">起</span>
            </p>
          </div>
          <p
            class="wrap_three"
            v-if="value.attributes.length>0 && value.attributes[0] && value.attributes[0].icon_color=='f07373'"
          >招牌</p>
          <p
            class="wrap_three"
            v-if="value.attributes.length>1 && value.attributes[1] && value.attributes[1].icon_color=='f07373'"
          >招牌</p>
          <div class="wrap_four">
            <el-button
              @click.stop="abb(i,index)"
              v-if="value.specfoods.length==1&&value.specfoods[0].original_price>0"
              type="danger"
              icon="el-icon-minus"
              circle
            ></el-button>
            <el-button
              @click.stop="kkk()"
              v-if="value.specfoods.length>1&&value.is_featured>0"
              type="danger"
              icon="el-icon-minus"
              circle
            ></el-button>
            <span v-if="value.specfoods.length==1&&value.specfoods[0].original_price>0">{{value.specfoods[0].original_price}}</span>
            <span v-if="value.specfoods.length>1&&value.is_featured>0">{{value.is_featured}}</span>
            <el-button @click.stop="aaa(value)" v-if="value.specfoods.length>1" type="primary" round>选规格</el-button>
            <el-button
              @click.stop="add(i,index)"
              v-if="value.specfoods.length==1"
              type="danger"
              icon="el-icon-plus"
              circle
            ></el-button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="bol&&gouwuche.length>0" id="shop">
      <div id="shop_top">
        <p id="shop_top_one">购物车</p>
        <p id="shop_top_two">
          <i class="el-icon-delete"></i>
          <span @click="a33()">清空购物车</span>
        </p>
      </div>
      <div class="conter" :key="i" v-for="(v,i) in gouwuche">
        <div class="con_yi">
          <p>{{v.name}}</p>
          <p v-if="v.two">{{v.specs_name}}</p>
        </div>
        <p class="con_er">￥{{v.price}}</p>
        <div>
          <el-button
              @click.stop="a11(v._id)"
              type="danger"
              icon="el-icon-minus"
              circle
            ></el-button>
            <span>{{v.original_price}}</span>
            <el-button
              @click.stop="a22(v._id)"
              type="danger"
              icon="el-icon-plus"
              circle
            ></el-button>
        </div>
      </div>
    </div>
    <div id="bottom">
      <div id="bottom_only">
        <div id="bottom_left">
          <div id="bottom_one">
            <img @click="qqq()" v-if="nums2>0" src="../../../static/imgs/waimai.png" alt>
            <img v-if="nums2<=0" src="../../../static/imgs/my.png" alt>
            <p v-if="nums2>0" id="bottom_one_one">{{nums2}}</p>
          </div>
          <div id="bottom_two">
            <p id="b_t_one">￥{{nums3}}</p>
            <p id="b_t_two">配送费￥{{float_delivery_fee}}</p>
          </div>
        </div>
        <div v-if="nums3<20" id="bottom_right">
          <p>还差￥{{20-nums3}}起送</p>
        </div>
        <div id="bottom_right" v-if="nums3>=20">
          <p @click="abc()">去结算</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dpsp",
  data() {
    return {
      float_delivery_fee:"",
      id: "",
      bol:false,
      arr2:[],
      guige:{},
      yf:false,
      one:"",
      tishi:false,
      yangshi:{
        opacity: 1
      }
    };
  },
  methods: {
    change(v){
      var bangdans = document.getElementsByClassName("left_one");
      for (let i = 0; i < bangdans.length; i++) {
        bangdans[i].style.backgroundColor = "gray";
        bangdans[i].style.borderLeft = "3px solid gray";
      }
      bangdans[v].style.backgroundColor = "white";
      bangdans[v].style.borderLeft = "3px solid blue";
    },
    kkk(){
      this.tishi = true;
      this.opacity = 1;
      var _this = this;
			var timer = setInterval(function (){
        console.log(_this.opacity)
         _this.opacity -= 0.05;
         if (_this.opacity<=0) {
            clearInterval(timer);
            _this.tishi = false;
         }
			},100);
    },
    jiaru(){
      this.$store.commit("a22add",this.one._id);
      this.guige = {};
      this.one = "";
      this.yf = false;
    },
    www(a,b){
      this.one = a;
      var guiges = document.getElementsByClassName("and");
      for (let i = 0; i < guiges.length; i++) {
        guiges[i].style.borderColor = "black";
        guiges[i].style.color = "black";
      }
      guiges[b].style.borderColor = "blue";
      guiges[b].style.color = "blue";
    },
    aaa(v){
      console.log(v);
      this.guige = v;
      this.one = v.specfoods[0];
      this.yf = true;
    },
    bbb(){
      this.guige = {};
      this.one = "";
      this.yf = false;
    },
    a33(){
      this.$store.commit("a33add");
      this.bol = false;
    },
    a11(v){
      if(this.gouwuche.length==0){
        this.bol=!this.bol;
      }
      this.$store.commit("a11add",v);
    },
    a22(v){
      this.$store.commit("a22add",v);
    },
    qqq(){
      this.bol=!this.bol;
    },
    abc() {
      this.$router.push({ name: "zhifu" });
    },
    add(a, b) {
      this.$store.commit("spsjadd2", {
        a: a,
        b: b
      });
    },
    abb(a, b) {
      this.$store.commit("spsjadd3", {
        a: a,
        b: b
      });
    },
    spshujus(v) {
      this.$store.commit("spsjadd", v);
    },
    zzz(v) {
      this.$store.commit("canpinadd", v);
      this.$router.push({ name: "canpin" });
    },
    getid() {
      this.float_delivery_fee = this.$store.state.dianpu.float_delivery_fee;
      this.id = this.$store.state.dianpu.id;
    },
    getfl() {
      const api =
        "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" + this.id;
      this.$http({
        url: api,
        get: "get"
      }).then(res => {
        for (var i = 0; i < res.data.length; i++) {
          for (var g = 0; g < res.data[i].foods.length; g++) {
            const zz = /^(https)/;
            const yy = zz.test(res.data[i].foods[g].image_path);
            if (yy == false) {
              res.data[i].foods[g].image_path =
                "https://elm.cangdu.org/img/" + res.data[i].foods[g].image_path;
            }
          }
        }
        console.log(res.data);
        this.spshujus(res.data);
        // this.obj = res.data;
      });
    }
  },
  created() {
    this.getid();
    this.getfl();
  },
  computed: {
    obj2() {
      return this.$store.state.spshuju;
    },
    nums() {
      var arr = [];
      for (var i = 0; i < this.$store.state.spshuju.length; i++) {
        var acc = 0;
        for (var k = 0; k < this.$store.state.spshuju[i].foods.length; k++) {
          for (var g = 0; g < this.$store.state.spshuju[i].foods[k].specfoods.length; g++) {
            acc += this.$store.state.spshuju[i].foods[k].specfoods[g].original_price;
            
          }
        }
        arr.push(acc);
      }
      return arr;
    },
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
    gouwuche() {
      var arr = [];
      for (var i = 0; i < this.$store.state.spshuju.length; i++) {
        for (var k = 0; k < this.$store.state.spshuju[i].foods.length; k++) {
          for (var g = 0; g < this.$store.state.spshuju[i].foods[k].specfoods.length; g++) {
            if (this.$store.state.spshuju[i].foods[k].specfoods[g].original_price > 0 &&       this.$store.state.spshuju[i].foods[k].specfoods.length>1) {
              this.$store.state.spshuju[i].foods[k].specfoods[g].two = true;
              arr.push(this.$store.state.spshuju[i].foods[k].specfoods[g]);
            }
            if (this.$store.state.spshuju[i].foods[k].specfoods[g].original_price > 0 &&this.$store.state.spshuju[i].foods[k].specfoods.length==1) {
              arr.push(this.$store.state.spshuju[i].foods[k].specfoods[g]);
            }
          }
        }
      }
      this.arr2 = arr;
      return arr;
    }
  }
};
</script>
<style scoped>
#wrap {
  background-color: white;
  overflow: hidden;
}
#left {
  width: 25%;
  float: left;
  height: 5.17rem;
  overflow: scroll;
}
.left_one {
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
  border-left :3px solid gray;
  background-color : gray;
  overflow: hidden;
  position: relative;
}
.left_one:nth-child(1){
  background-color : white;
  border-left :3px solid blue;
}
.left_two {
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  font-size: 0.12rem;
  background-color: red;
  color: white;
  border-radius: 50%;
}
.left_one a {
  font-size: 0.15rem;
  line-height: 0.4rem;
  margin-left: 0.1rem;
}
#right {
  width: 75%;
  height: 5.17rem;
  float: right;
  overflow: scroll;
}
.r_one {
  overflow: hidden;
  background-color: gray;
}
::-webkit-scrollbar {
  display: none;
}
.o_maodian {
  float: left;
  font-size: 0.2rem;
  margin-left: 0.1rem;
  line-height: 0.4rem;
}
.o_title {
  float: left;
  font-size: 0.15rem;
  margin-left: 0.1rem;
  line-height: 0.4rem;
}
.o_ddd {
  background-color: gray;
  float: right;
  font-size: 0.15rem;
  margin-right: 0.1rem;
  line-height: 0.4rem;
}
.r_t_wrap {
  overflow: hidden;
  padding: 0.1rem;
  position: relative;
}
.wrap_one {
  float: left;
  width: 20%;
}
.wrap_img1 {
  width: 100%;
}
.wrap_two {
  width: 65%;
  float: left;
  margin-left: 0.1rem;
}
.two_one {
  font-size: 0.18rem;
  line-height: 0.3rem;
}
.two_two {
  font-size: 0.13rem;
  line-height: 0.2rem;
}
.two_three {
  font-size: 0.13rem;
  line-height: 0.2rem;
}
.two_four {
  font-size: 0.13rem;
  line-height: 0.2rem;
  border: 1px solid red;
  border-radius: 30%;
}
.two_five {
  font-size: 0.13rem;
  line-height: 0.2rem;
}
.two_five span:nth-child(1) {
  color: red;
}
.wrap_three {
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
  font-size: 0.1rem;
  border: 1px solid red;
  border-radius: 30%;
}
.wrap_four {
  position: absolute;
  right: 0.1rem;
  bottom: 0.1rem;
  z-index: 3;
}
.wrap_four span {
  font-size: 0.15rem;
  background-color: blue;
}
.xin {
  width: 0.6rem;
  height: 0.6rem;
  background-color: green;
  position: absolute;
  left: -0.3rem;
  top: -0.3rem;
  transform: rotateZ(-45deg);
}
.xinpin {
  font-size: 0.14rem;
  text-align: center;
  margin-top: 0.41rem;
  color: white;
}
#bottom {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
}
#bottom_only {
  width: 100%;
  height: 0.5rem;
  position: relative;
}
#bottom_left {
  width: 65%;
  height: 0.5rem;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: yellow;
  position: relative;
}
#bottom_right {
  width: 35%;
  height: 0.5rem;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: greenyellow;
  text-align: center;
}
#bottom_right p {
  font-size: 0.2rem;
  line-height: 0.5rem;
}
#bottom_one {
  width: 0.6rem;
  height: 0.6rem;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: -0.2rem;
  left: 0.2rem;
  position: relative;
}
#bottom_one img {
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  left: 0.15rem;
  top: 0.15rem;
}
#bottom_one_one {
  font-size: 0.15rem;
  position: absolute;
  right: 0;
  top: 0;
  background-color: red;
  color: white;
}
#bottom_two {
  position: absolute;
  height: 100%;
  left: 0.9rem;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
#b_t_one {
  font-size: 0.2rem;
}
#b_t_two {
  font-size: 0.1rem;
}
#shop {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0.5rem;
  z-index: 5;
}
#shop_top {
  overflow: hidden;
  background-color: gray;
}
#shop_top p {
  line-height: 0.3rem;
}
#shop_top_one {
  font-size: 0.15rem;
  float: left;
  margin-left: 0.1rem;
}
#shop_top_two {
  font-size: 0.15rem;
  float: right;
  margin-right: 0.1rem;
}
.conter{
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
}
.conter_yi p{
  font-size: 0.2rem;
  line-height: 0.3rem;
}
.conter_er{
  font-size: 0.2rem;
  line-height: 0.3rem;
}
#yeal{
  width: 80%;
  height: 40%;
  background-color: white;
  position: fixed;
  left: 10%;
  top:30%;
  z-index: 4;
}
#yeal_one{
  height: 0.4rem;
  position: absolute;
  left: 0;
  top: 0;
  position: relative;
}
#y_o_one{
  font-size: 0.2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
#y_o_two{
  position: absolute;
  top: 0;
  right: 0;
}
#yeal_two{
  width: 100%;
  position: absolute;
  left: 0;
  top: 0.5rem;
}
#y_t_one{
  font-size: 0.2rem;
  line-height: 0.3rem;
  margin-left: 0.1rem;
}
#y_t_two{
  margin-top: 0.1rem;
}
#y_t_two span{
  font-size: 0.2rem;
  line-height: 0.3rem;
  margin-left: 0.1rem;
  border: 1px solid black;
  color: black;
}
#y_t_two span:nth-child(1){
  border: 1px solid blue;
  color: blue;
}
#yeal_three{
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  background-color: gainsboro;
}
#y_h_one{
  font-size: 0.2rem;
  line-height: 0.4rem;
  float: left;
  margin-left: 0.1rem;
}
#y_h_two{
  font-size: 0.2rem;
  line-height: 0.4rem;
  float: right;
  margin-right: 0.1rem;
}
#tishi{
  font-size: 0.15rem;
  line-height: 0.3rem;
  text-align: center;
  color: white;
  width: 70%;
  background-color: black;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 4;
}
</style>

