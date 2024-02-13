import { createRouter, createWebHistory } from "vue-router";
import InputName from '../components/InputName.vue';
import HappyValentine from '../components/HappyValentine.vue';

 

const routes = [
  { path: '/', component: InputName },
  { path: '/happy-valentines/:name', component: HappyValentine },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  

export default router;