<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <FooterView />
    <FooterApp />
  </v-app>
</template>

<script>

import FooterApp from './components/FooterApp.vue'

export default {
  name: 'App',
components: {
 FooterApp,

},


  data: () => ({
    //
  }),
}
</script>
