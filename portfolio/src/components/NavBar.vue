<template>
  <v-app-bar app color="black" flat class="px-12">
<v-btn>
  <v-icon color="orange" left class="mr-2"> <mdi-siganture-text class="text-decoration-line-through">hermestech</mdi-siganture-text></v-icon>
</v-btn>
<v-spacer></v-spacer>
<v-btn text @click="scroll('home')" class="text-orange">Home</v-btn>
<v-btn text @click="scroll('about')" >About</v-btn>
<v-btn text @click="scroll('portfolio')" >Portfolio</v-btn>
<v-btn text @click="scroll('services')" >Services</v-btn>
<v-btn text @click="scroll('pages')" >Pages</v-btn>
<!-- <v-btn text @click="scroll('blogs')" >Blogs</v-btn> -->
<v-btn text @click="scroll('contact')" >Contact</v-btn>
 
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
methods: {
  scroll(refName) {
    const element = document.getElementById(refName);
    element.scrollIntoView({behavior: "smooth"});
  }
}
}
</script>

<style>

</style>