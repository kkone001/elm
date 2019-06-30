<template>
  <div>
    <ul>
      <li :key="i" v-for="(v,i) in answer" @click="add(v)">
        <p class="one">{{v.name}}</p>
        <p class="two">{{v.address}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    name:'answer',
    data() {
        return {
            
        }
    },
    methods: {
      // 把搜索的信息传给存储器数据源
        add(obj){
            this.$store.commit("increAdd",obj);
            this.$router.push({name:"waimai",query:obj});
        } 
    },
    computed: {
      // 访问存储器中的数据
        answer(){
             //访问存储器中的值
            return this.$store.state.answer;
        }
    }
};
</script>
<style scoped>
ul li{
height: 0.6rem;
display: flex;
flex-direction: column;
justify-content: space-around;
border-top: 1px solid gray;
border-bottom: 1px solid gray;
background-color: white;
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
</style>

