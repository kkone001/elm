<template>
  <div>
    <div id="head">
      <a id="head_left" href="javascript:location.reload()">ele.me</a>
      <img v-if="sum" @click="login2()" id="head_right2" src="../../static/imgs/my.png" alt="">
      <span v-else @click="login()" id="head_right">登陆/注册</span>
    </div>
    <!-- 当前定位城市 -->
    <div id="current">
      <span id="current_left">当前定位城市:</span>
      <span id="current_right">定位不准时,请在城市列表中选择</span>
    </div>
    <div id="city" @click="add(city.id)">
      <span v-text="city.name" id="city_left"></span>
      <img id="city_right" src="../../static/imgs/right.png" alt="">
    </div>
    <div id="hot">
      <p id="hot_p">热门城市</p>
      <div :key="i" v-for="(v,i) in hots" @click="add(v.id)"><span>{{v.name}}</span></div>
    </div>

    <div class="citys">
      <div class="citys_top" :key="key" v-for="(value,key) in citys">
        <span class="citys_A">{{key}}</span>
        <span v-if="key == 'A'" class="citys_text">(按字母排序)</span>
        <div class="citys_bottom">
          <div  :key="i" v-for="(v,i) in value"  @click="add(v.id)">{{v.name}}</div>
        </div>
      </div>
    </div>
   





  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      city:{},//当前定位城市对象
      hots:[],//热门城市
      citys:{}//所有城市
    };
  },
  created() {
    this.getCity();
    this.getHots();
    this.getCitys();
  },
  methods: {
    //获取定位城市信息
   getCity(){
     const api = "https://elm.cangdu.org/v1/cities?type=guess";
     this.$http({
       url:api,
       method:'get'
     }).then(res=>{
       this.city = res.data;
     })
   },
   //获取热门城市信息
   getHots(){
     const api = "https://elm.cangdu.org/v1/cities?type=hot";
     this.$http({
       url:api,
       method:'get'
     }).then(res=>{
       this.hots = res.data;
     })
   },
  //  获取所有城市信息
   getCitys(){
     const api = "https://elm.cangdu.org/v1/cities?type=group";
     this.$http({
       url:api,
       method:'get'
     }).then(res=>{
       const arr = []
       for (const key in res.data) {
         arr.push(key);
       }
       arr.sort();
       for (let i = 0; i< arr.length; i++) {
         this.$set(this.citys,arr[i],res.data[arr[i]]);
       }
     })
   },
  //  编程式路由跳转，传参城市id
   add(v){
    this.$store.commit("cityadd",v); 
    this.$router.push({name:"city",query:v});
   },
  //  编程式路由跳转
   login(){
     this.$router.push({name:"login2"});
   }
  },
  computed: {
    // 访问数据存储器数据源
    sum(){
      return this.$store.state.denglu;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#head {
  width: 100%;
  height: 0.4rem;
  background-color: blue;
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
}
#head_left {
  color: white;
  float: left;
  font-size: 0.2rem;
  margin-bottom: 0.1rem;
  margin: 0.1rem;
}
#head_right {
  color: white;
  float: right;
  font-size: 0.2rem;
  margin: 0.1rem;
}
#head_right2 {
  width: 0.25rem;
  margin: 0.1rem;
  float: right;
}
#current {
  margin-top: 0.4rem;
  overflow: hidden;
  background-color: white;
  border-bottom: 1px solid gray;
}
#current_left {
  float: left;
  font-size: 0.15rem;
  line-height: 0.3rem;
  margin: 0.1rem;
}
#current_right {
  float: right;
  font-size: 0.15rem;
  line-height: 0.3rem;
  margin: 0.1rem;
}
#city {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: white;
}
#city_left {
  font-size: 0.2rem;
  margin: 0.1rem;
}
#city_right {
  width: 0.2rem;
  margin: 0.1rem;
}
#hot{
  margin-top: 0.1rem;
  overflow: hidden;
  background-color: white;
}
#hot div{
  width: 25%;
  height: 0.4rem;
  float: left;
  text-align: center;
  border: 1px solid gray;
  box-sizing: border-box;
}
#hot>div span{
  margin-top: 0.1rem;
  font-size: 0.2rem;
  margin-bottom: 0.1rem;
  line-height: 0.4rem;
  color: blue;
}
#hot_p{
  font-size: 0.15rem;
  margin: 0.1rem;
}
.citys{
  width: 100%;
  margin-top: 0.1rem;
}
.citys_top{
  margin-top: 0.1rem;
  background-color: white;
}
.citys_A{
  margin-left: 0.1rem;
  font-size: 0.2rem;
  line-height: 0.3rem;
}
.citys_text{
  color: gray;
  font-size: 0.15rem;
}
.citys_bottom{
  overflow: hidden;
}
.citys_bottom div{
  width: 25%;
  height: 0.4rem;
  float: left;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.4rem;
  border: 1px solid gray;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
