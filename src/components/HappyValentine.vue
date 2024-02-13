<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-red-500">
    <h1 class="text-5xl font-bold text-white mb-8"> Happy Valentine's Day</h1>
    <!-- <h1 class="text-5xl font-bold text-white mb-8">{{ userName }}!</h1> -->

    <Vue3Lottie 
      :autoplay="true"
      :loop="true"
      :animationData="animateJson"
      class="w-96 h-96"
    />

    <p class="text-lg text-center text-white mt-8">
      These balloons are filled with all my love for you. Wishing you a day filled with joy, happiness, and lots of love!
    </p>
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import animateJson from '../animate.json'

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      animateJson
    };
  },
  computed: {
    userName() {
     // return this.$route.params.name;
    },
  },
};
</script>

<style scoped>
/* Add any additional Tailwind styles here */
</style>
