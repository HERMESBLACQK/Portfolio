<template>
  <v-app id="home">
    <NavBar />

<v-container fluid>
  <div class="head">
     <v-row>
      <v-col cols="5" class="box">
        <div style="position: relative;" class="mt-16">
        <h1 class="text-grey">Hello</h1>
        <h1 class="text-white">I'M Omotoso Taiwo</h1>
        <span class="text-grey" >Web Developer & Designer</span> <br>
        <v-btn tile dark class="text-orange mt-8" variant="outlined"  @click="scroll('contact')">Contact Me</v-btn>
        </div>
      </v-col>
      <v-col cols="2" id="hide">
<div style="position: absolute;z-index: 9999;bottom: 0;margin: 0 auto;left: 0;right: 0;text-align: center; ">
<v-icon>mdi-chevron-double-down</v-icon>
</div>
      </v-col>
      <v-col cols="5" sm="6" id="headimg" class="hide">
<div style="position: absolute; z-index: 9999;" class="mt-16">
<v-img src="/2.jpg" contain max-height="300" :width="200">
  
</v-img>
</div>
      </v-col>
     </v-row>
  </div>

<v-col cols="12" class="show ml-4" id="about">
<div>
<v-row>
 <v-col cols="12" sm="6">
  <div class="circle bg-orange">
    <v-img src="/benz.png" max-height="300">

    </v-img>
  </div>

 </v-col>
<v-col cols="12" sm="6">
  
<h3 class="mt-16">About Me</h3>
<div style="width: 120px;">
<v-slider v-model="slider2" color="orange label-track-color">

</v-slider>
</div>
<h4 class="mt-n4"> I AM a Creative Web Developer</h4>
<h4>And Designer</h4>
<p class="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam recusandae voluptas aut ducimus modi beatae repellat quaerat inventore explicabo, aliquid ratione vitae amet cumque itaque dolores atque et numquam.</p> <br>
<p class="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam recusandae voluptas aut ducimus modi beatae repellat quaerat inventore explicabo, aliquid ratione vitae amet cumque itaque dolores atque et numquam.</p>
</v-col>
 
</v-row>


</div>
</v-col>
<v-divider></v-divider>

<v-col cols="12" class="padd" id="portfolio">
  <div class="first" id="project">
    <v-row>
      <v-col cols="12" sm="12">
   <div class="show text-center mt-4 w-100">
  <h2 id="offer">What We Offer</h2>
  <div style="width: 120px; margin: 0 auto;">
  <v-slider v-model="slider2" color="orange" class="label-track-color"></v-slider>
  </div>
</div>

    

    </v-col>
      <v-col cols="12" class="text-center">
<div class="child">
<v-btn><v-icon class="text-white " color="orange">mdi-laptop</v-icon></v-btn>
<h3 class="ml-3 mt-4">Web Development</h3>
<p class="text-grey ml-3 mt-4 text-caption">Lorem, ipsum dolor sit <br> amet consectetur adipisicing<br>  elit. Aut, accusamus!</p>
</div>

<div class="child">
<v-btn><v-icon class="text-white " color="orange">mdi-cellphone-text</v-icon></v-btn>
<h3 class="ml-3 mt-4">App Design</h3>
<p class="text-grey ml-3 mt-4 text-caption">Lorem, ipsum dolor sit <br> amet consectetur adipisicing<br>  elit. Aut, accusamus!</p>
</div>

<div class="child">
<v-btn><v-icon class="text-white " color="orange">mdi-monitor</v-icon></v-btn>
<h3 class="ml-3 mt-4">Web Design</h3>
<p class="text-grey ml-3 mt-4 text-caption">Lorem, ipsum dolor sit <br> amet consectetur adipisicing<br>  elit. Aut, accusamus!</p>
</div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</v-col >
<v-col cols="12" sm="12" id="pages ">
   <div class="show text-center mt-4 w-100">
  <h2 id="offer">What We Offer</h2>
  <div style="width: 120px; margin: 0 auto;">
  <v-slider v-model="slider2" color="orange" class="label-track-color"></v-slider>
  </div>
</div>
    </v-col>
<v-col cols="12" class="imgHover" id="services">


  <v-row class="fill-height align-center"  justify="center">
<template v-for="(item, i) in itemscol" :key="i">
<v-cols cols="12" md="4">
 
<v-hover v-slot="{isHovering, props}">
<v-card :elevation="isHovering ? 12: 2" class="{'on-hover' : isHoevring} ma-4" v-bind="props">
  <h2 class="bg-transparent text-center">{{ item.title }}</h2>
<v-img :src="item.img"  cover
:width="250" 
  aspect-ratio="4/3"
  
  height="300"></v-img>
</v-card>
</v-hover>
</v-cols>
</template>


  </v-row>

  <v-divider class="my-4"></v-divider>

</v-col>
<v-col cols="12" sm="12" id="pages">
   <div class="show text-center mt-4 w-100">
  <h2 id="offer">What We Offer</h2>
  <div style="width: 120px; margin: 0 auto;">
  <v-slider v-model="slider2" color="orange" class="label-track-color"></v-slider>
  </div>
</div>

    

    </v-col>
<v-row class="pa-8">

  <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          cover
        ></v-carousel-item>
      </v-carousel>
</v-row>
<v-row>

<v-col cols="12" sm="4" class="pa-8" id="contact">
  <div class="child">
    <h1>Contact Info</h1>
    <v-btn class="mt-10" variant="outlined"> <v-icon>mdi-map-marker</v-icon></v-btn> <br>
    <span class="text-caption">Your street gyt, your Area dream</span> <br>
    <v-btn class="mt-10" variant="outlined"><v-icon>mdi-phone</v-icon></v-btn> <br>
    <span class="text-caption">(+234)9035355746</span> <br> 
    <span class="text-caption">(+234)9035355746</span> <br>
    <v-btn class="mt-10" variant="outlined"><v-icon>mdi-email</v-icon></v-btn> <br>
    <span class="text-caption">Omotosolilhenxy@gmail.com</span> <br> 
    <span class="text-caption">Dr.blacqk@gmail.com</span>
  </div>
</v-col>
<v-col cols="12" sm="8" class="pa-8">
<h1 class="mt-8">Send your message</h1>
<v-divider></v-divider>
<span class="text-caption">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, deserunt, consequuntur debitis, veritatis similique sequi reprehenderit doloribus eligendi non optio natus in? Non magni mollitia veniam sed quidem culpa impedit?
</span>
<v-form method="post">
<v-row class="mt-10">
 
  <v-col cols="12" sm="6"> 
   
      <v-text-field label="Name" persistent-hint="" variant="outlined" id="name"></v-text-field>
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
      <v-btn color="orange" class="mt-2" type="submit" id="sendbtn">Submit Now</v-btn>
  
      </v-form>
</v-col>
</v-row>

</v-container>
  </v-app>

</template>

<script>
import NavBar from '@/components/NavBar.vue'


export default ({
  name: 'HomeView',
components: {
  NavBar ,

},
methods: {
  scroll(refName) {
    const element = document.getElementById(refName);
    element.scrollIntoView({behavior: "smooth"});
  }
},
setup()  {
  return {

    items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
      itemscol: [
        {
          img: '/javascript.png'
        },
        {
          img: '/html.png'
        },
        {
          img: '/css.png'
        },
        {
          img: '/2.jpg'
        },
        {
          img: '/2.jpg'
        },
        {
          img: '/2.jpg'
        },
      ]
  }
}

});

</script>


<style>
.v-container{
  padding: 10px 0;
}
 .head{
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
 }
.head::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);
   
}
.head::after{
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);
}
.circle{
  height: 300px;
  width: 300px;
  border-radius: 50%;
  display: flex;
  margin-top: 50px;
  margin-left: 100px;

}
.fisrt{
  width: 100%;
  height: 200px;
  text-align: center;
  padding: 2rem;
}
.child{
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}
.imgHover{
  padding: 0 200px;
}
.pre{
  width: 100%;
  /* height: 300px; */
  text-align: center;
  padding: 0 200px;
  background-color: #f5f5f5;
}
.hire {
  width: 100%;
  height: 200px;
  padding: 0 200px;
  background-color: #f5f5f5;
  margin-top: -24px;
}


@media only screen and (max-width: 1500px){

#contact{
  text-align: center;
}
.show{
  width: 100%;
  margin-left: 0;
}
#offer{
  width: 100%;
  margin: 0;

}
#headimg{
  position: absolute;
  left: 60%;
  top: 0;
}
.circle{

  margin-left: 0;

}

.imgHover{
  padding: 0;
}
.head{
  padding:0 5px;
}
.showmenu{
  display: none;
}



}
@media only screen and (max-width: 850px){
  .hidemenu{
    display: none;
  }
  .showmenu{
    display: inline-block;
  }
}



@media only screen and (max-width: 600px){
  #hide{
    display: none;
}
.hide{
  display: none;
}
.box{
  width: 100%;
  text-align: center;
  z-index: 999;
  position: absolute;
  left: 30%;
}







}





</style>