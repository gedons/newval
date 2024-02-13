<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-red-500">
    <h1 class="text-5xl font-bold text-white mb-8">Happy Valentine's Day, {{ userName }}!</h1>

    <Vue3Lottie 
      :autoplay="isBallonsAnimating"
      :loop="true"
      :animationData="balloonsAnimationData"
      class="w-96 h-96"
    />

    <p class="text-lg text-center text-white mt-8">
      These balloons are filled with all my love for you. Wishing you a day filled with joy, happiness, and lots of love!
    </p>
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'

export default {
  components: {
    Vue3Lottie,
  },
  props: {
    userName: String,
  },
  data() {
    return {
      isBallonsAnimating: false,
      balloonsAnimationData: 'https://app.lottiefiles.com/animation/312a2d04-99d3-4fe6-bc29-283348b63b9b', 
    };
  },
  mounted() {
    setTimeout(() => {
      this.isBallonsAnimating = true;
    }, 500); // Start animation after a short delay
  },
};
</script>

<style scoped>
/* Add any additional Tailwind styles here */
</style>
