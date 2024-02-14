import { createRouter, createWebHistory } from "vue-router";
import SelectValentine from '../components/SelectValentine.vue';
import HappyValentine from '../components/HappyValentine.vue';
import NoValentine from '../components/NoValentine.vue';
import YesValentine from '../components/YesValentine.vue';
import SupriseValentine from '../components/SupriseValentine.vue';


 

const routes = [
  { path: '/', component: SelectValentine },
  { path: '/happy-valentines/', component: HappyValentine },
  { path: '/no-valentines/', component: NoValentine },
  { path: '/yes-valentines/', component: YesValentine },
  { path: '/suprise-valentines/', component: SupriseValentine },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  

export default router;