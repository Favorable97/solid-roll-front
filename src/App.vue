<template>
  <v-app>
    <NavBar />
    <v-main class="mx-5">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  
  components: { NavBar },
  name: 'App',
  data: () => ({
    
  }),
  computed: {
  }
}
</script>
