<template>
  <div class="container mx-auto mt-32 mb-20 px-4">
    <h2 class="text-3xl font-bold text-pink-500 text-center">Enter your name for a Valentine's Surprise!</h2>
    <form @submit.prevent="submitName" class="flex justify-center mt-8">
      <input type="text" v-model="userName" id="name-input" placeholder="Enter your name" class="rounded-md border-2 border-pink-500 px-4 py-2 focus:outline-pink-500 active:border-pink-700">
      <button type="submit" class="bg-pink-500 hover:bg-pink-700 text-white font-bold rounded-md px-4 py-2 ml-4">Surprise!</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
    };
  },
  methods: {
    submitName() {
      this.$router.push('/happy-valentines/' + this.userName);
    },
  },
};
</script>
