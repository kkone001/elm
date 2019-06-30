<template>
  <div>
    <div id="head">
      <img @click="add()" id="head_one" src="../../../static/imgs/left.png" alt>
      <p id="head_two">订单备注</p>
    </div>
    <div id="top">
      <div id="top_one">
        <p>快速备注</p>
      </div>
      <div id="top_two">
        <el-radio-group class="aa" v-model="radio1">
          <el-radio-button label="不要辣"></el-radio-button>
          <el-radio-button label="少点辣"></el-radio-button>
          <el-radio-button label="多点辣"></el-radio-button>
        </el-radio-group>
        <el-radio-group class="aa" v-model="radio2">
          <el-radio-button label="不要香菜"></el-radio-button>
        </el-radio-group>
        <el-radio-group class="aa" v-model="radio3">
          <el-radio-button label="不要洋葱"></el-radio-button>
        </el-radio-group>
        <el-radio-group class="aa" v-model="radio4">
          <el-radio-button label="多点醋"></el-radio-button>
        </el-radio-group>
        <el-radio-group class="aa" v-model="radio5">
          <el-radio-button label="多点葱"></el-radio-button>
        </el-radio-group>
        <el-radio-group class="aa" v-model="radio6">
          <el-radio-button label="去冰"></el-radio-button>
          <el-radio-button label="少冰"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div id="center">
        <div id="center_one">
            <p>其他备注</p>
        </div>
        <div id="center_two">
            <textarea v-model="text" placeholder="请输入备注内容(可不填)"></textarea>
        </div>
    </div>
    <button id="end" @click="abc()">确定</button>
  </div>
</template>
<script>
export default {
  name: "ddbz",
  data() {
    return {
        radio1: '',
        radio2: '',
        radio3: '',
        radio4: '',
        radio5: '',
        radio6: '',
        text:""
    };
  },
  methods: {
    add() {
      this.$router.back();
    },
    abc() {
      this.$router.back();
    }
  },
  created() {}
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
    background-color: white;
}
#top_one p{
    font-size: 0.2rem;
    margin-left: 0.1rem;
    line-height: 0.4rem;
}
.aa{
    margin: 0.1rem;
}
#center{
    margin-top: 0.1rem;
    background-color: white;
}
#center_one p{
    font-size: 0.2rem;
    margin-left: 0.1rem;
    line-height: 0.4rem;
}
#center_two textarea{
    font-size: 0.15rem;
    width: 3.55rem;
    margin-left: 0.1rem;
    height: 1rem;
    background-color: gainsboro;
    margin-bottom: 0.1rem;
}
#end{
    width: 3.45rem;
    font-size: 0.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    margin-left: 0.15rem;
    background-color: greenyellow;
    border-radius: 5%;
}
</style>

