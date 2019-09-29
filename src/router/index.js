import Vue from 'vue';
import Router from 'vue-router';
import Users from '../components/Users/UserList.vue';
import Posts from '../components/Posts/PostList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    {
      path: '/users/:id',
      name: 'Posts',
      component: Posts
    }
  ]
});
