import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/page-1.vue';
import Hours from './components/enter_hours.vue';
import login from './components/login_start.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/hours', component: Hours },
  { path: '/login', component: login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
