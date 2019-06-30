<template>
  <div>
    <p id="record">搜索历史</p>
    <ul id="top" v-if="sum">
      <li :key="i" v-for="(v,i) in history" @click="first()">
        <p class="one">{{v.name}}</p>
        <p class="two">{{v.address}}</p>
      </li>
    </ul>
    <p @click="add()" id="delete" v-if="sum">清空所有</p>
  </div>
</template>
<script>
export default {
    name:'history',
    data() {
        return {
            history_id:""
        }
    },
    methods: {
        add(){//清空历史纪录
            this.$store.commit("increAee");
        },
        first(){
          this.$router.push({name:"waimai"});
        }
    },
    computed: {
        sum(){
             //访问存储器中的值
            return this.$store.state.bol;
        },
        history(){
             //访问存储器中的值
            return this.$store.state.history;
        }
    }
};
</script>
<style scoped>
#record{
    margin: 0.1rem;
}
#top{
  background-color: white;
}
ul li{
height: 0.6rem;
display: flex;
flex-direction: column;
justify-content: space-around;
border-bottom: 1px solid gray;
}
.one{
font-size: 0.15rem;
margin-left: 0.1rem;
}
.two{
font-size: 0.1rem;
overflow: hidden;
 text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 0.1rem;
}
#delete{
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.2rem;
    background-color: white;
}
</style>

