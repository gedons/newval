<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-red-500">
    <h1 class="text-5xl font-bold text-white mb-8"> Just Want to Show You How Special You Are to Me 😘😘</h1>
    <!-- <h1 class="text-5xl font-bold text-white mb-8">{{ userName }}!</h1> -->

    <Vue3Lottie :autoplay="true" :loop="true" :animationData="animateJson" class="w-96 h-96" />
    <div class="fullscreen-container">
      <Vue3Lottie :autoplay="true" :loop="true" :animationData="celebrateJson" class="fullscreen-lottie" />
    </div>
    <p class="text-lg text-center text-white mt-8">
      This teddy is filled with all my love for you. Wishing you a day filled with joy, happiness, and lots of love!
    </p>
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import animateJson from '../animate.json'
import celebrateJson from '../celebrate.json'

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      animateJson,
      celebrateJson
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
.fullscreen-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  
}

.fullscreen-lottie {
  width: 100%;
  height: 100%;
}
</style>
