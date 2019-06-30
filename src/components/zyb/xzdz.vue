<template>
    <div>
        <div id="head">
            <img @click="add()" id="head_one" src="../../../static/imgs/left.png" alt="">
            <p id="head_two">选择地址</p>
        </div>
        <div id="top">
            <div @click="qaq(i)" class="center" :key="i" v-for="(v,i) in getshdz">
                <img class="center_one" src="../../../static/imgs/zq.png" alt="">
                <div class="center_two">
                    <p class="center_two_one"><span class="one_one">{{v.name}}</span><span class="one_two">{{v.sex}}</span><span class="one_three">{{v.phone}}</span></p>
                    <p class="center_two_two"><span class="two_one">{{v.dizhi}}</span><span class="two_two">{{v.xxdizhi}}</span></p>
                </div>
            </div>
        </div>
        <div @click="asd()" id="end">
            <div id="end_one">
                <i class="el-icon-circle-plus-outline"></i>
                <p>新增收货地址</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"xzdz",
    data() {
        return {
            
        }
    },
    methods: {
        qaq(v){
            this.$store.commit("changeadd",v);
            this.$router.back();
        },
        add(){
            this.$router.back();
        },
        asd(){
            this.$router.push({name:"tjdz"});
        }
    },
    computed: {
        getshdz(){
            return this.$store.state.shdz;
        }
    },
    created() {
        
    },
}
</script>
<style scoped>
#head{
    height: 0.4rem;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: blue;
}
#head_one{
    width: 0.2rem;
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
}
#head_two{
    font-size: 0.2rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
#end{
    width: 100%;
    height: 0.4rem;
    position: fixed;
    left: 0;
    bottom: 0;
}
#end_one{
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    display: flex;
    align-items: center;
}
#end_one p{
    font-size: 0.2rem;
}
#top{
    margin-top: 0.4rem;
}
.center{
    height: 0.8rem;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
}
.center_one{
    width: 0.2rem;
    margin-left: 0.1rem;
}
.center_two{
    margin-left: 0.1rem;
}
.center_two_one{
    line-height: 0.3rem;
}
.center_two_two{
    line-height: 0.3rem;
}
.one_one{
    font-size: 0.2rem;
}
.one_two{
    font-size: 0.15rem;
    margin-left: 0.1rem;
}
.one_three{
    font-size: 0.15rem;
    margin-left: 0.1rem;
}
.two_one{
    font-size: 0.15rem;
    background-color: red;
    color: white;
}
.two_two{
    font-size: 0.15rem;
    margin-left: 0.1rem;
}
</style>

