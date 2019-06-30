export default {
    increAcc(state,a){
        state.answer=a;
    },
    increAdd(state,a){
        state.history.push(a);
        state.waimai_wz=a;
        state.bol=true;
    },
    increAee(state){
        state.history=[];
        state.bol=false;
    },
    cityadd(state,v){
        state.city=v;
    },
    dengluadd(state){
        state.denglu=true;
    },
    dianpuadd(state,v){
        if(state.dpbol==false){
            state.dpbol = true;
        }else if(state.dianpu.id!=v.id){
            state.spshuju = [];
        }
        state.dianpu=v;
    },
    canpinadd(state,v){
        state.canpin=v;
    },
    spsjadd(state,v){
        if(state.spshuju.length>0){
            return;
        }
        state.spshuju=v;
    },
    spsjadd2(state,obj){
        state.spshuju[obj.a].foods[obj.b].specfoods[0].original_price += 1;
    },
    spsjadd3(state,obj){
        state.spshuju[obj.a].foods[obj.b].specfoods[0].original_price -= 1;
    },
    a11add(state,obj){
        for (var i = 0; i <state.spshuju.length; i++) {
            for (var k = 0; k < state.spshuju[i].foods.length; k++) {
              for (var g = 0; g < state.spshuju[i].foods[k].specfoods.length; g++) {
                if(state.spshuju[i].foods[k].specfoods[g]._id==obj){
                    state.spshuju[i].foods[k].specfoods[g].original_price -= 1;
                }
              }
            }
        }
        for (var i = 0; i < state.spshuju.length; i++) {
            for (var k = 0; k < state.spshuju[i].foods.length; k++) {
              state.spshuju[i].foods[k].is_featured = 0;
              for (var g = 0; g < state.spshuju[i].foods[k].specfoods.length; g++) {
                state.spshuju[i].foods[k].is_featured +=state.spshuju[i].foods[k].specfoods[g].original_price;
              }
            }
        }
    },
    a22add(state,obj){
        for (var i = 0; i < state.spshuju.length; i++) {
            for (var k = 0; k < state.spshuju[i].foods.length; k++) {
                for (var g = 0; g < state.spshuju[i].foods[k].specfoods.length; g++) {
                    if(state.spshuju[i].foods[k].specfoods[g]._id==obj){
                        state.spshuju[i].foods[k].specfoods[g].original_price += 1;
                    }
                }
            }
        }
        for (var i = 0; i < state.spshuju.length; i++) {
            for (var k = 0; k < state.spshuju[i].foods.length; k++) {
              state.spshuju[i].foods[k].is_featured = 0;
              for (var g = 0; g < state.spshuju[i].foods[k].specfoods.length; g++) {
                state.spshuju[i].foods[k].is_featured +=state.spshuju[i].foods[k].specfoods[g].original_price;
              }
            }
        }
    },
    a33add(state){
        for (var i = 0; i < state.spshuju.length; i++) {
            for (var k = 0; k < state.spshuju[i].foods.length; k++) {
                for (var g = 0; g < state.spshuju[i].foods[k].specfoods.length; g++) {
                    state.spshuju[i].foods[k].specfoods[g].original_price = 0;
                }
            }
        }
        for (var i = 0; i < state.spshuju.length; i++) {
            for (var k = 0; k < state.spshuju[i].foods.length; k++) {
              state.spshuju[i].foods[k].is_featured = 0;
              for (var g = 0; g < state.spshuju[i].foods[k].specfoods.length; g++) {
                state.spshuju[i].foods[k].is_featured +=state.spshuju[i].foods[k].specfoods[g].original_price;
              }
            }
        }
    },
    setmap(state,v){
        state.map = v;
    },
    shdzadd(state,v){
        state.shdz.push(v);
    },
    changeadd(state,v){
        var a = state.shdz[v];
        state.shdz.splice(v,1);
        state.shdz.unshift(a);
    },
    getarr(state,v){
        state.spfl = v;
    },
    setddliebiao(state,v){
        state.ddliebiao.push(v);
    },
    czspshujuadd(state){
        state.spshuju={};
    },
}