// InputName.vue
<template>
  <form @submit.prevent="submitName">
    <label for="name-input">Enter your name:</label>
    <input type="text" v-model="userName" id="name-input" placeholder="Enter your name">
    <button type="submit">Surprise!</button>
  </form>
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
