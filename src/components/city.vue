<template>
    <div>
        <div id="head">
            <img @click="add()" id="head_left" src="../../static/imgs/left.png" alt="">
            <span id="head_center" v-text="name"></span>
            <span @click="add()" id="head_right">切换城市</span>
        </div>
        <div id="search">
            <input v-model="map" id="search_inp" placeholder="输入学校、商务楼、地址" type="text">
            <br>
            <router-link to="/answer"><button id="search_btn" @click="getMap()">提交</button></router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'city',
    data() {
        return {
            id:"",//城市id
            name:"",//城市名称
            map:""//输入框绑定数据
        }
    },
    created() {
        // this.id=this.$route.query;//接收传来的参数，并赋值给this.id
        this.answer();
        this.getCity();
    },
    methods: {
        // 获取城市信息
        getCity(){
            const api = "https://elm.cangdu.org/v1/cities/"+this.id;
            this.$http({
                url:api,
                method:'get'
            }).then(res=>{
                this.name = res.data.name;

            })
        },
        // 获取搜索位置信息
        getMap(){
            const api = "https://elm.cangdu.org/v1/pois?city_id="+this.id+"&keyword="+this.map+"&type=search";
            this.$http({
                url:api,
                method:'get'
            }).then(res=>{
                this.add3(res.data);
            })
        },
        // 修改存储器数据
        add3(v){
                this.$store.commit("increAcc",v);
        },
        // 后退一个历史纪录
        add(){
            this.$router.back();
        },
        answer(){
            this.id = this.$store.state.city;
        }
    }
}
</script>
<style scoped>
#head{
    width: 100%;
    height: 0.4rem;
    position: fixed;
    left: 0;
    top: 0;
    background-color: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#head_left{
    height: 0.2rem;
    margin-left: 0.1rem;
}
#head_center{
    font-size: 0.2rem;
    color: white;
}
#head_right{
    font-size: 0.15rem;
    margin-right: 0.1rem;
    color: white;
}
#search{
    margin-top: 0.5rem;
    background-color: white;
}
#search_inp{
    width: 80%;
    height: 0.3rem;
    font-size: 0.2rem;
    background-color: gainsboro;
    line-height: 0.3rem;
    margin-left: 10%;
    margin-top: 0.1rem;
}
#search_btn{
    width: 80%;
    height: 0.3rem;
    font-size: 0.2rem;
    line-height: 0.3rem;
    margin-left: 10%;
    margin-bottom: 0.1rem;
    margin-top: 0.1rem;
    background-color: blue;
    color: white;
}
</style>

