<template>
  <header-logo />
  <main style="margin-bottom: 10vh">
    <RouterView />
  </main>
</template>

<script>
  import HeaderLogo from './components/HeaderLogo.vue'

  export default {
    components: {
      HeaderLogo
    }
  }
</script>
