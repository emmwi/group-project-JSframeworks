<template>
  <BButton @click="showModal = !showModal" variant="none" class="button">
    Logga ut
  </BButton>
  <BModal @ok="onOk" v-model="showModal" title="Logga ut">
    Är du säker att du vill logga ut?
  </BModal>
</template>
<script>
  export default {
    data() {
      return {
        showModal: false
      }
    },
    methods: {
      onOk() {
        this.$router.push('/')
      }
    }
  }
</script>

<style button>
  .button {
    font-family: 'Lexend', sans-serif;
    color: var(--mörkbrun);
    margin: 0;
    padding: 0;
  }
  * {
    font-family: 'Lexend', sans-serif;
    color: var(--mörkbrun);
  }
</style>
