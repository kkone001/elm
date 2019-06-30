<template>
  <div>
    <div id="head">
      <img @click="add()" id="head_one" src="../../../static/imgs/left.png" alt>
      <p id="head_two">搜索</p>
    </div>
    <div id="top">
        <input v-model="gjc" id="top_one" placeholder="请输入小区/写字楼/学校等" type="text">
        <button @click="aaa()" id="top_two">搜索</button>
    </div>
    <div id="bottom">
        <p>找不到地址?</p>
        <p>尝试输入小区,写字楼或者学校名</p>
        <p>详细地址(如门牌号等)可稍后输入哦</p>
    </div>
    <div v-if="maps.length>0" id="center">
        <div @click="map(v.name)" class="end"  :key="i" v-for="(v,i) in maps">
            <p class="end_one">{{v.name}}</p>
            <p class="end_two">{{v.address}}</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ssdz",
  data() {
      return {
          id:"",
          gjc:"",
          maps:[]
      }
  },
  methods: {
      getcity(){
          var api = "https://elm.cangdu.org/v1/cities?type=guess";
          this.$http({
              url:api,
              method:'get'
          }).then(res=>{
              this.id = res.data.id;
          })
      },
      aaa(){
          if(this.gjc.length<1){
              return;
          }
          var api = "https://elm.cangdu.org/v1/pois?city_id="+this.id+"&keyword="+this.gjc+"&type=search"
          this.$http({
              url:api,
              method:'get'
          }).then(res=>{
              console.log(res.data);
              this.maps = res.data;
          })
      },
      add(){
          this.$router.back();
      },
      map(v){
          this.$store.commit("setmap",v);
          this.$router.back();
      }
  },
  computed: {
      
  },
  created() {
      this.getcity();
  },
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
#top{
    margin-top: 0.5rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
#top_one{
    width: 80%;
    height: 0.3rem;
    font-size: 0.2rem;
}
#top_two{
    height: 0.3rem;
    font-size: 0.2rem;
    background-color: blue;
    color: white;
}
#center{
    margin-top: 0.1rem;
    padding: 0.1rem;
    background-color: white;
    z-index: 2;
}
.end{
    border-bottom: 1px solid gray;
}
.end_one{
    font-size: 0.2rem;
    line-height: 0.3rem;
}
.end_two{
    font-size: 0.2rem;
    line-height: 0.3rem;
    color: gray;
    margin-bottom: 0.1rem;
}
#bottom{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 0.1rem;
    text-align: center;
}
</style>

