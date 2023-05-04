const app = Vue.createApp({

data() {
          return{

                    url: 'http://www.thenetninja.co.uk',

                    showBooks: true,
                    books: [
                              {  title: 'The final empire',  author: 'black',        age: 45, img: 'asset/1.jpg', isFav: true},
                              {  title: 'The second empire',  author: 'taiwo',        age: 45, img: 'asset/2.jpeg', isFav: false},
                              {  title: 'The third empire',  author: 'you',        age: 45, img: 'asset/3.jpeg', isFav: true},
                    ]
                  
                   
             
                   
          }
},

methods: {
       toggleShowBooks() {
          this.showBooks = !this.showBooks
       },



       toggleFav(book) {
             book.isFav = !book.isFav    
       }
},


// computed: {
//           filteredBooks() {
//                     return this.books.filter((book) => book.isFav)
//           }
// }
})


app.mount('#app')


