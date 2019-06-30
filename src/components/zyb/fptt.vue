<template>
  <div>
    <div id="head">
      <img @click="add()" id="head_one" src="../../../static/imgs/left.png" alt>
      <p id="head_two">选择发票抬头</p>
    </div>
    <div id="top">
        <p id="top_one">不需要开发票</p>
        <img id="top_two" @click="fapiao=false" v-if="fapiao==true" src="../../../static/imgs/zq.png" alt="">
        <img id="top_two" @click="fapiao=true" v-if="fapiao==false" src="../../../static/imgs/cw.png" alt="">
    </div>
    <button id="end" @click="abc()">确定</button>
  </div>
</template>
<script>
export default {
  name: "fptt",
  data() {
    return {
        fapiao:false
    };
  },
  methods: {
    add() {
      this.$router.back();
    },
    abc() {
      this.$router.back();
    },
  },
  created() {
      
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
}
#top_one{
    font-size: 0.2rem;
    line-height: 0.5rem;
    margin-left: 0.1rem;
}
#top_two{
    width: 0.25rem;
    margin-right: 0.1rem;
}
#end{
    width: 3.45rem;
    font-size: 0.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    margin-left: 0.15rem;
    margin-top: 0.1rem;
    background-color: greenyellow;
    border-radius: 5%;
}
</style>

