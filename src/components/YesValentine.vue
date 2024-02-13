<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-red-500">
        <h2 class="text-4xl font-bold text-white mb-8 text-center">Unlock the surprise!</h2>
        <h2 class="text-2xl font-bold text-white mb-8 text-center">Enter the 4 digits code</h2>
        <form @submit.prevent="submitCode" class="w-full max-w-md">
            <div class="flex flex-row gap-4"> <input type="text" v-model="secretCode" maxlength="1"
                    class="rounded-md border-2 border-pink-500 px-4 py-2 focus:outline-pink-500 active:border-pink-700 text-center w-1/4">
                <input type="text" v-model="secretCode2" maxlength="1"
                    class="rounded-md border-2 border-pink-500 px-4 py-2 focus:outline-pink-500 active:border-pink-700 text-center w-1/4">
                <input type="text" v-model="secretCode3" maxlength="1"
                    class="rounded-md border-2 border-pink-500 px-4 py-2 focus:outline-pink-500 active:border-pink-700 text-center w-1/4">
                <input type="text" v-model="secretCode4" maxlength="1"
                    class="rounded-md border-2 border-pink-500 px-4 py-2 focus:outline-pink-500 active:border-pink-700 text-center w-1/4">
            </div> <br> <button type="submit"
                class="bg-pink-500 hover:bg-pink-700 text-white font-bold rounded-md px-4 py-2  w-1/4">Unlock!</button>          
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            secretCode: '',
            secretCode2: '',
            secretCode3: '',
            secretCode4: '',
            isLoading: false,
        };
    },
    computed: {
        isCodeValid() {
            return (
                this.secretCode.length === 1 &&
                this.secretCode2.length === 1 &&
                this.secretCode3.length === 1 &&
                this.secretCode4.length === 1 &&
                [this.secretCode, this.secretCode2, this.secretCode3, this.secretCode4].join('') === '2525'
            );
        },
    },
    methods: {
        async submitCode() {
            if (!this.isCodeValid) {
                alert("Sorry! The code you entered is invalid!");
                return;
            }
            this.$router.push('/suprise-valentines/');
        },
    },
};
</script>
  