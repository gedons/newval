import { createRouter, createWebHistory } from "vue-router";
import SelectValentine from '../components/SelectValentine.vue';
import HappyValentine from '../components/HappyValentine.vue';
import NoValentine from '../components/NoValentine.vue';
import YesValentine from '../components/YesValentine.vue';
import SupriseValentine from '../components/SupriseValentine.vue';
import PinValentine from '../components/PinValentine.vue';

 

const routes = [
  { path: '/', component: SelectValentine },
  { path: '/happy-valentines/', component: HappyValentine },
  { path: '/no-valentines/', component: NoValentine },
  { path: '/yes-valentines/', component: YesValentine },
  { path: '/suprise-valentines/', component: SupriseValentine },
  { path: '/pin-valentines/', component: PinValentine },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  

export default router;