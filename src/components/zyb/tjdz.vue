<template>
  <div>
    <div id="head">
      <img @click="add()" id="head_one" src="../../../static/imgs/left.png" alt>
      <p id="head_two">添加地址</p>
    </div>
    <div id="top">
      <div id="top_one">
        <div id="top_one_left">
          <p id="one_left_one">联系人</p>
        </div>
        <div id="top_one_right">
          <div id="one_right_one">
            <input v-model="name" id="one_right_one_one" placeholder="你的名字" type="text">
          </div>
          <div id="one_right_two">
            <div id="one_right_two_left">
              <img v-if="nan==true" src="../../../static/imgs/zq.png" alt>
              <img v-if="nan==false" @click="qqq()" src="../../../static/imgs/cw.png" alt>
              <p>先生</p>
            </div>
            <div id="one_right_two_right">
              <img v-if="nv==true" src="../../../static/imgs/zq.png" alt>
              <img v-if="nv==false" @click="aaa()" src="../../../static/imgs/cw.png" alt>
              <p>女士</p>
            </div>
          </div>
        </div>
      </div>
      <div id="top_two">
          <div id="top_two_left">
              <p id="top_two_left_one">联系电话</p>
          </div>
          <div id="top_two_right">
              <div id="top_two_right_one">
                  <input v-model="phone" id="two_right_one_one" placeholder="你的手机号" type="text">
                  <i @click="bx()" class="el-icon-plus"></i>
              </div>
              <div v-if="beixuan" id="top_two_right_two">
                  <input id="two_right_two_one" placeholder="备选电话" type="text">
              </div>
          </div>
      </div>
      <div id="top_three">
          <div id="top_three_left">
              <p id="top_three_left_one">送餐地址</p>
          </div>
          <div id="top_three_right">
              <div id="top_three_right_one">
                  <input v-model="xiaoqu" @click="sdz()" id="three_right_one_one" placeholder="小区/写字楼/学校等" type="text">
              </div>
              <div id="top_three_right_two">
                  <input v-model="xxdizhi" id="three_right_two_one" placeholder="详细地址(如门牌号等)" type="text">
              </div>
          </div>
      </div>
      <div id="top_four">
          <div id="top_four_left">
                <p id="top_four_left_one">标签</p>
          </div>
          <div id="top_four_right">
                <input v-model="biaoqian" id="top_four_right_one" placeholder="无/家/学校/公司" type="text">
          </div>
      </div>
    </div>
    <button @click="jdz()" id="btn">确定</button>
  </div>
</template>
<script>
export default {
  name: "tjdz",
  data() {
    return {
      nan: true,
      nv: false,
      beixuan:false,
      name:"",
      phone:"",
      bxphone:"",
      xiaoqu:"",
      xxdizhi:"",
      biaoqian:""
    };
  },
  methods: {
    bx(){
      this.beixuan = true;
    },
    jdz(){
      if(this.name.length==0||this.phone.length==0||this.xiaoqu.length==0||this.xxdizhi.length==0){
        return;
      }
      var a = "";
      if(this.nan==true){
        a = "先生";
      }else{
        a = "女士";
      }
      var arr = {
        name:this.name,
        sex:a,
        phone:this.phone,
        bxphone:this.bxphone,
        dizhi:this.xiaoqu,
        xxdizhi:this.xxdizhi,
        biaoqian:this.biaoqian
      }
      this.shouhuo(arr);
      this.$router.back();
    },
    shouhuo(v){
      this.$store.commit("shdzadd",v);
    },
    add(){
        this.$router.back();
    },
    qqq() {
      this.nan = true;
      this.nv = false;
    },
    aaa() {
      this.nan = false;
      this.nv = true;
    },
    sdz(){
        this.$router.push({name:"ssdz"});
    },
    getmap(){
        this.xiaoqu = this.$store.state.map;
        console.log(this.xiaoqu);
    }
  },
  computed: {
      
  },
  created() {
      this.getmap();
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
#top_one {
  overflow: hidden;
  border-bottom: 1px solid gray;
}
#top_one_left {
  width: 30%;
  float: left;
}
#one_left_one {
  font-size: 0.2rem;
  margin-top: 0.15rem;
  text-align: center;
}
#top_one_right {
  width: 70%;
  float: right;
}
#one_right_one {
  height: 0.5rem;
}
#one_right_one_one {
  width: 100%;
  height: 0.3rem;
  font-size: 0.2rem;
  margin-top: 0.1rem;
}
#one_right_two {
  height: 0.5rem;
  border-top: 1px solid gray;
  overflow: hidden;
}
#one_right_two_left,#one_right_two_right {
 height: 0.5rem;
  float: left;
  display: flex;
  align-items: center;
}
#one_right_two_left img,#one_right_two_right img{
    width: 0.2rem;
}
#one_right_two_left p,#one_right_two_right p{
    font-size: 0.2rem;
    margin-left: 0.1rem;
}
#one_right_two_right{
    margin-left: 0.1rem;
}
#top_two {
  overflow: hidden;
  border-bottom: 1px solid gray;
}
#top_two_left {
  width: 30%;
  float: left;
}
#top_two_left_one {
  font-size: 0.2rem;
  margin-top: 0.15rem;
  text-align: center;
}
#top_two_right {
  width: 70%;
  float: right;
}
#top_two_right_one {
  height: 0.5rem;
  display: flex;
  align-items: center;
}
#two_right_one_one{
    width: 80%;
    font-size: 0.2rem;
    height: 0.3rem;
}
.el-icon-plus{
    font-size: 0.2rem;
    margin-left: 5%;
    color: blue;
}
#top_two_right_two {
  height: 0.5rem;
  border-top: 1px solid gray;
}
#two_right_two_one{
    width: 100%;
    height: 0.3rem;
    font-size: 0.2rem;
    margin-top: 0.1rem;
}

#top_three {
  overflow: hidden;
  border-bottom: 1px solid gray;
}
#top_three_left {
  width: 30%;
  float: left;
}
#top_three_left_one {
  font-size: 0.2rem;
  margin-top: 0.15rem;
  text-align: center;
}
#top_three_right {
  width: 70%;
  float: right;
}
#top_three_right_one {
  height: 0.5rem;
}
#three_right_one_one{
    width: 100%;
    height: 0.3rem;
    font-size: 0.2rem;
    margin-top: 0.1rem;
}
#top_three_right_two {
  height: 0.5rem;
  border-top: 1px solid gray;
}
#three_right_two_one{
    width: 100%;
    height: 0.3rem;
    font-size: 0.2rem;
    margin-top: 0.1rem;
}

#top_four {
  overflow: hidden;
}
#top_four_left {
  width: 30%;
  float: left;
}
#top_four_left_one {
  font-size: 0.2rem;
  margin-top: 0.15rem;
  text-align: center;
}
#top_four_right {
  width: 70%;
  height: 0.5rem;
  float: right;
}
#top_four_right_one {
    width: 100%;
    height: 0.3rem;
    font-size: 0.2rem;
    margin-top: 0.1rem;
}
#btn{
    width: 80%;
    height: 0.3rem;
    margin-left: 10%;
    margin-top: 0.1rem;
    background-color: greenyellow;
    color: white;
    font-size: 0.2rem;
}
</style>

