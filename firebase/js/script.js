var app = angular.module('bookShopApp', ['ngRoute', 'ngCookies', 'ngAnimate']);

app.run(function ($rootScope, $cookies){

  var storedCart =  $cookies.getObject('cart');
  if (storedCart) {
    $rootScope.cart = storedCart;
  } else {
    $rootScope.cart = [];
  }

});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


// LÄGGA TILL BOK DATABASEN

// db.collection("books").add({
//   img_urls: 'images/books/janguillou-mellanrottochsvart.jpg',
//   author: "Jan Guillou",
//   title: "Mellan Rött Och Svart",
//   category: "Inbunden",
//   lang: 'en',
//   price: 217,
//   instock: 45,
//   instockdate: new Date('2018-03-20'),
//   rating: 5.0,
//   totalratings: 67,
//   quantity: 1
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });

