<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-red-500">
    <h2 class="text-4xl font-bold text-white mb-8">Hey baby, do you love me?</h2>

    <div class="flex justify-center mt-8">
      <button @click="handleYes" class="bg-pink-500 hover:bg-pink-700 text-white font-bold rounded-md px-4 py-2 mr-4">Yes!</button>
      <button @click="handleNo" class="bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-md px-4 py-2">No :-(</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleYes() {      
      this.$router.push('/yes-valentines/');
    },
    handleNo() {      
      alert("Aww, come on, just kidding! Please click Yes");
    },
  },
};
</script>
