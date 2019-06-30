<template>
    <div>
        <div id="head">
            <img @click="add()" id="head_one" src="../../../static/imgs/left.png" alt="">
            <img id="head_two" :src="arc" alt="">
            <div id="head_three">
                <p id="three_top">{{name}}</p>
                <p id="three_center">商家配送／分钟送达／配送费¥5</p>
                <p id="three_bottom">公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
                
            </div>
            <img @click="abc()" id="head_four" src="../../../static/imgs/right.png" alt="">
        </div>
        <div id="top">
            <div id="top_one">
                <p @click="qqq()" :class="one1">商品</p>
            </div>
            <div id="top_two">
                <p @click="aaa()" :class="one2">评价</p>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'dianpu',
    data() {
        return {
            id:"",
            arc:"",
            name:"",
            num:1,
            one1:"aa",
            one2:"bb"
        }
    },
    created() {
        this.answer();
        this.getdp();
    },
    methods: {
        qqq(){
            this.one1 = "aa";
            this.one2 = "bb";
            this.$router.push({name:"dpsp"});
        },
        aaa(){
            this.one1 = "bb";
            this.one2 = "aa";
            this.$router.push({name:"dppj"});
        },
        answer(){
            this.id = this.$store.state.dianpu.id;
        },
        getdp(){
            const api = "https://elm.cangdu.org/shopping/restaurant/"+this.id;
            this.$http({
                url:api,
                method:'get'
            }).then(res=>{
                console.log(res.data);
                this.arc = "https://elm.cangdu.org/img/"+res.data.image_path;
                this.name = res.data.name;
            });
        },
        add(){
            this.$router.back();
        },
        abc(){
            this.$router.push({ name: "dpxq" });
        }
    }
}
</script>
<style scoped>
#head{
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: gray;
}
#head_one{
    width: 0.3rem;
}
#head_two{
    width: 0.5rem;
}
#three_top{
    font-size: 0.15rem;
    color: white;
}
#three_center{
    font-size: 0.1rem;
    color: white;
    margin-bottom: 0.1rem;
    margin-top: 0.1rem;
}
#three_bottom{
    font-size: 0.1rem;
    color: white;
}
#head_four{
    width: 0.3rem;
}
#top{
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: space-around;
}
#top_one{
    height: 0.5rem;
    width: 50%;
    float: left;
    text-align: center;
    position: relative;
}
#top_one p{
    font-size: 0.2rem;
    line-height: 0.3rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
#top_two{
    height: 0.5rem;
    width: 50%;
    float: right;
    text-align: center;
    position: relative;
}
#top_two p{
    font-size: 0.2rem;
    line-height: 0.3rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.aa{
    color: blue;
    border-bottom: 1px solid blue;
}
.bb{
    color:black;
}
</style>

