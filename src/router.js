import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import Not from './views/Not.vue'
import Detail from './views/Detail.vue'

import { Button } from 'vant';  //vant按钮
import { Swipe, SwipeItem } from 'vant';//轮播
import { Icon } from 'vant';
import { Sticky } from 'vant'; //sticky 粘性布局
import { List } from 'vant';   //list瀑布流加载
import { IndexBar, IndexAnchor } from 'vant';
import { Cell, CellGroup } from 'vant';
import { ImagePreview } from 'vant';

Vue.use(ImagePreview);
Vue.use(Cell).use(CellGroup);
Vue.use(IndexBar).use(IndexAnchor);
Vue.use(List);
Vue.use(Sticky);
Vue.use(Icon);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Button);

Vue.use(Router);

const router= new Router({
  mode:'history',
  routes: [
    {
    path:'/',
    redirect:'/city'
    },




    {
      path: '/movie',  /*请求根路径时 展示 hone组件*/
      name: 'home',
      component: Home,
      children:[
        {
          path:'HotMovie',
          name:'HotMovie',
          meta:{
            show:true
          },
          component:()=>import('./views/HotMovie.vue')
        },
        {
          path:'Coming',
          name:'Coming',
          meta:{
            show:true
          },
          component:()=>import('./views/Coming.vue')
        }
      ]
    },




    {
      path: '/about',
      name: 'about',
      meta:{
        show:true
      },
      component: () => import( './views/About.vue')
    },
    {
      path:'/detail/:id',   //动态路由
      name:'Detail',
      component: () => import('./views/Detail.vue')

    },
    {
      path:'/MovieInfo',
      name:'MovieInfo',
      meta:{
        show:true
      },
      component: ()=>import('./views/MovieInfo.vue')
    },
    {
      path:'/My',
      name:'My',
      meta:{
        show:true
      },
      component: ()=>import('./views/My.vue')
    },
    {
      path:'/Login',
      name:'Login',
      component: ()=>import('./views/users/Login.vue')
    },
    {
      path:'/Cinema/:id',
      name:'Cinema',
      component: ()=>import('./views/Cinema/Cinema.vue')
    },
    {
      path:'/City',
      name:'City',
      component: ()=>import('./views/city/City.vue')
    },
    {
      path:'/Test',
      name:'Test',
      component: ()=>import('./views/Test.vue')
    },
    {
      path:"*",
      name:'Not',
      component: () => import( './views/Not.vue')
    },
  ]
});

/*router.beforeEach((to,from,next)=>{
  if (localStorage.getItem('username')) { // 如果已经登录的话
    next();
  } else {
    if (to.path === '/login') { // 如果是登录页面的话，直接next()
      next();
    } else { // 否则 跳转到登录页面
      next({
        path: '/login'
      });
    }
  }
});*/

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

export default router;
