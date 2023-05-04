<template>
     <v-footer fluid>
      <v-card elevation="0" rounded="0" width="100%" class=" text-center d-inline-block" fluid>
        <v-card-text>
          <v-btn variant="plain" color="orange text-h6" class="mr-4" href="www.facebook.com">
<v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn variant="plain" color="orange text-h6" class="mr-4" href="www.facebook.com">
<v-icon>mdi-twitter</v-icon>
          </v-btn>
        
          <v-btn variant="plain" color="orange text-h6" class="mr-4" href="www.facebook.com">
<v-icon>mdi-linkedin</v-icon>
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