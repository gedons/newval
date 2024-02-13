// InputName.vue
<template>
  <form @submit.prevent="submitName">
    <input type="text" v-model="userName" placeholder="Enter your name">
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
