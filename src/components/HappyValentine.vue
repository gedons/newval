<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-red-500">
    <h1 class="text-5xl font-bold text-white mb-8">  {{ userName }}!</h1>

    <Vue3Lottie 
      :autoplay="isBallonsAnimating"
      :loop="true"
      :animationData="balloonsAnimationData"
      class="w-96 h-96"
    />

    <p class="text-lg text-center text-white mt-8">
      <!-- These balloons are filled with all my love for you. Wishing you a day filled with joy, happiness, and lots of love! -->
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
      balloonsAnimationData: null,
    };
  },
  async mounted() {
    this.balloonsAnimationData = await import('../animate.json');
    setTimeout(() => {
      this.isBallonsAnimating = true;
    }, 500); 
  },
};
</script>

<style scoped>
/* Add any additional Tailwind styles here */
</style>
