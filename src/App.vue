<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<template>
  <header>
   

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products">Parfum</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <RouterView />

  </header>

  

</template>

<style scoped>

.wrapper {
  padding-top: 60px; 
}


</style>