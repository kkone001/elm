import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import City from '@/components/city'
import History from '@/components/history'
import Answer from '@/components/answer'
import Login2 from '@/components/login2'
import Czmm from '@/components/czmm'
import Waimai from '@/components/zyb/waimai'
import Dianpu from '@/components/zyb/dianpu'
import Dpsp from '@/components/zyb/dpsp'
import Dppj from '@/components/zyb/dppj'
import Dpxq from '@/components/zyb/dpxq'
import Canpin from '@/components/zyb/canpin'
import Spaq from '@/components/zyb/spaq'
import Zhifu from '@/components/zyb/zhifu'
import Xzdz from '@/components/zyb/xzdz'
import Tjdz from '@/components/zyb/tjdz'
import Ssdz from '@/components/zyb/ssdz'
import Ddbz from '@/components/zyb/ddbz'
import Fptt from '@/components/zyb/fptt'
import Ddlb from '@/components/zyb/ddlb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/waimai',
      name: 'waimai',
      component: Waimai
    },
    {
      path: '/ddlb',
      name: 'ddlb',
      component: Ddlb
    },
    {
      path: '/ddbz',
      name: 'ddbz',
      component: Ddbz
    },
    {
      path: '/fptt',
      name: 'fptt',
      component: Fptt
    },
    {
      path: '/tjdz',
      name: 'tjdz',
      component: Tjdz
    },
    {
      path: '/ssdz',
      name: 'ssdz',
      component: Ssdz
    },
    {
      path: '/xzdz',
      name: 'xzdz',
      component: Xzdz
    },
    {
      path: '/zhifu',
      name: 'zhifu',
      component: Zhifu
    },
    {
      path: '/spaq',
      name: 'spaq',
      component: Spaq
    },
    {
      path: '/canpin',
      name: 'canpin',
      component: Canpin
    },
    {
      path: '/dianpu',
      name: 'dianpu',
      component: Dianpu,
      redirect:"/dpsp",
      children:[
        {
          path:"/dpsp",
          name:"dpsp",
          component:Dpsp
        },
        {
          path:"/dppj",
          name:"dppj",
          component:Dppj
        }
      ]
    },
    {
      path: '/dpxq',
      name: 'dpxq',
      component: Dpxq
    },
    {
      path: '/login2',
      name: 'login2',
      component: Login2
    },
    {
      path: '/czmm',
      name: 'czmm',
      component: Czmm
    },
    {
      path: '/city',
      name: 'city',
      component: City,
      redirect:"/history",
      children:[
        {
          path:'/history',
          name:'history',
          component:History
        },
        {
          path:'/answer',
          name:'answer',
          component:Answer
        }
      ]
    }
  ]
})
