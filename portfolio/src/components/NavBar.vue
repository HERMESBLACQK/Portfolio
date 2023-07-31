<template>
  <v-app-bar color="black" flat app class="absolute">
<v-btn class="" @click="scroll('home')">
  <v-icon color="orange" left class="mr-2">mdi-laptop</v-icon>
  HERMESTECH
</v-btn>
<v-spacer></v-spacer>
<div class="hidemenu">
  <v-btn text @click="scroll('home')" class="text-orange" v-model="drawer">Home</v-btn>
<v-btn text @click="scroll('about')" >About</v-btn>
<v-btn text @click="scroll('portfolio')" >Portfolio</v-btn>
<v-btn text @click="scroll('services')" >Services</v-btn>
<v-btn text @click="scroll('pages')" >Projects</v-btn>
<v-btn text @click="scroll('contact')">Contact</v-btn>
</div>

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
},
data() {
  return {
    // drawer: true
  }
}
}
</script>

<style>
.menubar{
  position: relative;
  right: 20%;
  left: 40%;
  height: 20%;
}
</style>