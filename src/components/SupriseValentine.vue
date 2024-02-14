<template>
    <div class="min-h-screen bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
        <div class="bg-gray-200 p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 class="text-4xl font-bold mb-8">Hey, You're the best thing that ever happened to me</h2>
            <h2 class="text-4xl font-bold mb-8">I love ❤💖 you so much </h2>
            <h2 class="text-2xl font-bold mb-8">I got a suprise for you </h2>

            <div class="flex justify-center mt-8">
                <button @click="handleClick"
                    class="bg-pink-500 hover:bg-pink-700 text-white font-bold rounded-md px-4 py-2 mr-4">Click!</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    methods: {
        handleClick() {
            this.$router.push('/happy-valentines/');
        },

    },
};
</script>
  