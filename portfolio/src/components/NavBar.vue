<template>
  <v-app-bar app color="black" flat class=" px-12" >
<v-btn>
  <v-icon color="orange" left class="mr-2"> <mdi-siganture-text class="text-decoration-line-through">hermestech</mdi-siganture-text></v-icon>
</v-btn>
<v-spacer></v-spacer>
<div class="hidemenu">
  <v-btn text @click="scroll('home')" class="text-orange" v-model="drawer">Home</v-btn>
<v-btn text @click="scroll('about')" >About</v-btn>
<v-btn text @click="scroll('portfolio')" >Portfolio</v-btn>
<v-btn text @click="scroll('services')" >Services</v-btn>
<v-btn text @click="scroll('pages')" >Pages</v-btn>
<v-btn text @click="scroll('contact')">Contact</v-btn>
</div>
<div class="showmenu pa-0" >
  <v-btn icon color="orange" dark  @click="scroll('services')">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      services
    </v-btn>
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