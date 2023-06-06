import VueRouter from 'vue-router' // 引入VueRouter
import About from '../pages/About' // 路由组件
import Home from '../pages/Home' // 路由组件
import News from '../pages/News' // 路由组件
import Message from '../pages/Message' // 路由组件
import Detail from '../pages/Detail' // 路由组件

// 创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
      children: [
        //通过children配置子级路由
        {
          // path: 'news' // 简化写法，此处一定不要带斜杠
          path: '/home/news', //完整写法
          name: 'xinwen', //给路由命名
          component: News,
        },
        {
          path: 'message', // 简化写法
          component: Message,
          children: [
            {
              path: 'detail',
              name: 'xiangqing', //命名路由
              component: Detail,
              //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
              // props:{a:900}

              //第二种写法：props值为布尔值，为true时，则把路由收到的所有params参数通过props传给Detail组件
              // props:true

              //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                }
              },
            },
          ],
        },
      ],
    },
  ],
})

//暴露router
export default router
