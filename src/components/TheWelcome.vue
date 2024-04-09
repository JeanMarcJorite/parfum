<script>


export default {
  name: 'TheWelcome',
  data() {
    return {
      message: 'Bienvenue sur notre site web !',
    }
  },
  methods: {
  }
}
</script>

<template>
  

  <h1 class="welcome-message">{{ message }}</h1>


</template>

<style>
.welcome-message {
  color: black;
  font-family: "CenturyGothic", "CenturyGothic-fallback", Arial, sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 28px;
}

</style>
