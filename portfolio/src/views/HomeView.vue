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
<div style="z-index: 9999;" class="mt-16">
<v-img src="/mypic.jpg" contain max-height="350" :width="200">
  
</v-img>
</div>
      </v-col>
     </v-row>
  </div>

<v-col cols="12" class="show ml-4" id="about">
<div>
<v-row>
 <v-col cols="12" sm="6">
  <div class="circle">
    <v-img src="/mypic.jpg" max-height="300" class="circle">

    </v-img>
  </div>

 </v-col>
<v-col cols="12" sm="6" class="pa-8">
  
<h3 class="mt-16">About Me</h3>
<div style="width: 120px;" >
<v-slider v-model="slider1" color="orange label-track-color">

</v-slider>
</div>
<h4 class="mt-n4"> I AM a Creative Web Developer</h4>
<h4>And Designer</h4>
<p class="text-grey">I have excellent web development skills and a passion for developing web applications or improving existing one.</p> <br>
<p class="text-grey">I am very diligent in the area of decision making and problem solving.</p> <br>
<p class="text-grey">I love teamwork and i am always open and ready to learn from others and share ideas and views.</p> <br>
<p class="text-grey">I have 3 years experience as a front end developer and i have worked with numerous organizations.</p>
<p class="text-grey">I am  detail oriented, highly organized, analytical and great with managing relationships.</p> <br>

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
  <h2 id="offer">What I Offer</h2>
  <div style="width: 120px; margin: 0 auto;">
  <v-slider v-model="slider2" color="orange" class="label-track-color"></v-slider>
  </div>
</div>

    

    </v-col>
      <v-col cols="12" class="text-center">
<div class="child">
<v-btn><v-icon class="text-white " color="orange">mdi-laptop</v-icon></v-btn>
<h3 class="ml-3 mt-4">Web Development</h3>
<p class="text-grey ml-3 mt-4 text-caption">My priority is to give you <br>the best service <br>experience in Web development</p>
</div>

<div class="child">
<v-btn><v-icon class="text-white " color="orange">mdi-cellphone-text</v-icon></v-btn>
<h3 class="ml-3 mt-4">Web App Management</h3>
<p class="text-grey ml-3 mt-4 text-caption">I am a seasoned web app <br>manager across all platforms <br>  with 3 years experience in this particular field</p>
</div>

<div class="child">
<v-btn><v-icon class="text-white " color="orange">mdi-monitor</v-icon></v-btn>
<h3 class="ml-3 mt-4">Web Design</h3>
<p class="text-grey ml-3 mt-4 text-caption">Do you need a design for your  <br>dream web app? Then<br> my priority is to make your dreams and imagined web app real</p>
</div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</v-col >
<v-col cols="12" sm="12" id="pages ">
   <div class="show text-center mt-4 w-100">
  <h2 id="offer">The Technologies I work with</h2>
  <div style="width: 120px; margin: 0 auto;">
  <v-slider v-model="slider3" color="orange" class="label-track-color"></v-slider>
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
  <h2 id="offer">My Projects Timeline</h2>
  <div style="width: 120px; margin: 0 auto;">
  <v-slider v-model="slider4" color="orange" class="label-track-color"></v-slider>
  </div>
</div>

    

    </v-col>
<v-row class="pa-8">

  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      
    >  </v-carousel-item>
  </v-carousel>

</v-row>
<v-row>
  <v-col class="show text-center mt-4 w-100" cols="12" sm="12">
    <v-header>
      <h2 id="offer">Browse My Projects</h2>
    </v-header>
    <div class="browse d-flex justify-center pa-4" md="6">
    <div class=" ma-8"  variant="outlined">
      <h4 class="text-h7 text-grey">Movie streaming web application</h4>  <a href="https://realstreams.vercel.app/" class="text-white">
        <button class="bg-orange text-white rounded pa-2 px-8">view</button>
      </a>
     
    </div>
    <div class=" ma-8"  variant="outlined">
      <h4 class="text-h7 text-grey">Online restaurant landing page</h4>  <a href="https://foodplug-swart.vercel.app/" class="text-white">
        <button class="bg-orange text-white rounded pa-2 px-8">view</button>
      </a>
     
    </div>
    <div class=" ma-8" color="orange"  variant="outlined">
      <h4 class="text-h7  text-grey">Ride Booking Landing page</h4>  <a href="https://taxigeao.vercel.app/" class="text-white">
        <button class="bg-orange text-white rounded pa-2 px-8">view</button>
      </a>
     
    </div>

  </div>
  <div class="browse d-flex justify-center pa-4" md="6">
    <div class=" ma-8"  variant="outlined">
      <h4 class="text-h7 text-grey">Interior Decoration Landing page</h4>  <a href="https://week3-lyart.vercel.app/" class="text-white">
        <button class="bg-orange text-white rounded pa-2 px-8">view</button>
      </a>
     
    </div>
    <div class=" ma-8"  variant="outlined">
      <h4 class="text-h7 text-grey">Online clothing Store</h4>  <a href="https://fasttrackstore.vercel.app/" class="text-white">
        <button class="bg-orange text-white rounded pa-2 px-8">view</button>
      </a>
     
    </div>
    <div class=" ma-8"  variant="outlined">
      <h4 class="text-h7 text-grey">Tourist Landing page</h4>  <a href="https://xerax-project.vercel.app/" class="text-white">
        <button class="bg-orange text-white rounded pa-2 px-8">view</button>
      </a>
     
    </div>
  </div>

  </v-col>
</v-row>


</v-container>
<formSend />
  </v-app>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import formSend from '@/components/ContactUs.vue'



export default ({
  name: 'HomeView',
components: {
  NavBar ,
  formSend

},
data: () => ({
      item: [
        {
          title: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          title: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          title: 'Link 2',
          disabled: false,
          href: 'breadcrumbs_link_2',
        },
      ],
    }),
methods: {
  scroll(refName) {
    const element = document.getElementById(refName);
    element.scrollIntoView({behavior: "smooth"});
  },

},
setup()  {
  return {
    slider1: 25,
slider2: 50,
slider3: 75,
slider4: 100,
    items: [
      {
          src: '/2.png',
          href: 'https://xerax-project.vercel.app/',
        },
        {
          src: '/3.png',
        },
        {
          src: '/4.png',
        },
        {
          src: '/5.png',
        },
        {
          src: '/6.png',
        },
        {
          src: '/7.png',
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
          img: '/tailwind.png'
        },
        {
          img: '/sass.png'
        },
        {
          img: '/vue.png'
        },
        {
          img: '/vuejs.png'
        },
      ],

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
#heading{
  border: 2px solid red;
}
.browse{
  display: flex;
  flex-direction: row;
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
.browse{
  flex-direction: column;
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