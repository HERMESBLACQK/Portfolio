<template>
  <v-row>

  <v-col cols="12" sm="4" class="pa-8" id="contact">
    <div class="child">
      <h1>Contact Info</h1>
      
      <v-btn class="mt-10" variant="outlined"> <v-icon>mdi-map-marker</v-icon></v-btn> <br>
      <span class="text-caption">4 apatapiti street off Futa Southgate, Akure, Ondo State, Nigeria</span> <br>
      <v-btn class="mt-10" variant="outlined"><v-icon>mdi-phone</v-icon></v-btn> <br>
      <span class="text-caption">(+234)9035355746</span> <br> 
      <span class="text-caption">(+234)8116009623</span> <br>
      <v-btn class="mt-10" variant="outlined"><v-icon>mdi-email</v-icon></v-btn> <br>
      <span class="text-caption">Omotosolilhenxy@gmail.com</span> <br> 
      <span class="text-caption">Dr.blacqk@gmail.com</span>
    </div>
  </v-col>
  <v-col cols="12" sm="8" class="pa-8">
  <h1 class="mt-8">Send your message</h1>
  <v-divider></v-divider>
  <span class="text-caption">
    If you have a project that you think I would be a good fit for, please don't hesitate to reach out to me using the contact form below. I would love to hear about your project and discuss how I can help bring your vision to life. 
    Thank you for taking the time to visit my portfolio, and I look forward to the opportunity to work with you!"
  </span>
  <form ref="form" @submit.prevent="sendEmail">
  <v-row class="mt-10">
   
    <v-col cols="12" sm="6"> 
     
        <v-text-field label="Name" persistent-hint="" variant="outlined" id="name" name="name"></v-text-field>
          </v-col>
    <v-col cols="12" sm="6"> 
     
        <v-text-field label="Email" persistent-hint="" variant="outlined" id="email" name="email"></v-text-field>
          </v-col>
    <v-col cols="12" sm="6"> 
     
        <v-text-field label="Subject" persistent-hint="" variant="outlined" id="subject" name="subject"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
        <v-text-field label="Phone No" persistent-hint="" variant="outlined" id="phone" name="phone"></v-text-field>
          </v-col>
        </v-row>
        <v-textarea label="Message" persistent-hint="" variant="outlined" id="message" name="message"></v-textarea>
        <v-btn color="orange" class="mt-2" type="submit" id="sendbtn" value="send">Submit Now</v-btn>    
      </form>
  </v-col>
  </v-row>
  <!-- <form ref="form" @submit.prevent="sendEmail">
    <v-row class="mt-10">
 
      <v-col cols="12" sm="6"> 
       
          <v-text-field label="Name" persistent-hint="" variant="outlined" id="name" name="name"></v-text-field>
            </v-col>
      <v-col cols="12" sm="6"> 
       
          <v-text-field label="Email" persistent-hint="" variant="outlined" id="email"></v-text-field>
            </v-col>
      <v-col cols="12" sm="6"> 
       
          <v-text-field label="Subject" persistent-hint="" variant="outlined" id="subject"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
          <v-text-field label="Phone No" persistent-hint="" variant="outlined" id="phone"></v-text-field>
            </v-col>
          </v-row>
          <v-textarea label="Message" persistent-hint="" variant="outlined" id="message"></v-textarea>
          <v-btn color="orange" class="mt-2" type="submit" id="sendbtn" value="send">Submit Now</v-btn>
  </form> -->
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_sht60cr', 'template_y6m266i', this.$refs.form, '1nB7iDS463Ze2YTnI')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }



 };

</script>

<style>

</style>






