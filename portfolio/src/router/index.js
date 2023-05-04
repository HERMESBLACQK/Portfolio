import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
var btn = document.getElementById('sendbtn');
btn.addEventListener('click', function(e) {
          e.preventDefault()
          var name = document.getElementById('name').value;
          var phone = document.getElementById('phone').value;
          var email = document.getElementById('email').value;
          var subject = document.getElementById('subject').value;
          var message = document.getElementById('message').value;

          var body = 'Name: ' +name+  '<br/> Phone: ' +phone+ '<br/> Email: ' +email+ '<br/> Subject: ' +subject+ '<br/> Message: ' +message;

          email.send({
                    Host : "smtp.gmail.com",
                    Username : "omotosolilhenxy@gmail.com",
                    Password : "uhtwhaxirvsdbztm",
                    To : 'omotosolilhenxy@gmail.com',
                    From : email,
                    Subject : subject,
                    Body : body
                }).then(
                  message => alert(message)
                );

});

export default router
