<template>
     <v-footer fluid>
      <v-card elevation="0" rounded="0" width="100%" class=" text-center d-inline-block" fluid>
        <v-card-text  v-for="item in foot" :key="item" class="d-inline-block">
          <v-btn variant="plain" color="orange text-h6" class="mr-4">
<v-icon> {{ item.icon }} </v-icon>
          </v-btn>
   
        
        </v-card-text>
        <v-card-subtitle>
          <h4> Developed With VueJs And Vuetify</h4>
        </v-card-subtitle>

      </v-card>
  
  </v-footer>
</template>

<script>
export default {
name: 'FooterApp',

data () {
  return{
  foot: [
    {
      icon: 'mdi-facebook', url: 'www.facebook.com'
    },
    {
      icon: 'mdi-twitter', href: 'www.facebook.com'
    },
    {
      icon: 'mdi-linkedin', href: 'www.facebook.com'
    },
  ]
  }
}

}
</script>

<style>
 .fb-btn{
  border: 2px solid white;
  color: #f3dde1;
 }

</style>