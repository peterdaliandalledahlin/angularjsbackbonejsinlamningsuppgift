app.controller('bookController', function($rootScope, $cookies) {

  //get firestore collection
  db.collection("books")
    .get()
    .then((querySnapshot) => { 
        
      var productlist = [];

      querySnapshot.forEach(function(doc) {
        var product = doc.data();
        product.id = doc.id;
        productlist.push(product)
       
      });

    //start shoppingcart
       let itemsExistsInCart = function(cartItems, id) {
        return _.find(cartItems, function(cartItem){
            return cartItem.id === id
        });
        };
        
        if($rootScope.cart.length === 0) {
            
        }

        $rootScope.addItem = function(product) {
            let found = itemsExistsInCart($rootScope.cart, product.id);

            if(found){
                found.quantity += product.quantity;
            }
            else {
                $rootScope.cart.push(angular.copy(product));
            }
            $rootScope.persistCart();
        }

        $rootScope.removeItem = function(product) {
            let index = $rootScope.cart.indexOf(product);
            $rootScope.cart.splice(index, 1);
            $rootScope.persistCart();
        }

        //set cookie function
        $rootScope.persistCart = function(){
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() +7);
            $cookies.putObject('cart', $rootScope.cart, {'expires': expireDate});
        }

        $rootScope.getProductCost = function(product) {
            return product.quantity * product.price;
        }

        $rootScope.getProductQuantity = function(product) {
            return product.quantity;
        }

        $rootScope.getTotal = function() {
            let total = _.reduce($rootScope.cart, function(sum, product){
                return sum + $rootScope.getProductCost(product);
            }, 0);
            if($rootScope.cart.length === 0 ){
                $rootScope.emptycart = "Your cart is empty"
            }
            else {
                $rootScope.emptycart = "";
            }
            return total;
            }

            $rootScope.getQuantity = function() {
                var quantity = _.reduce($rootScope.cart, function(sum, product) {
                    return sum + $rootScope.getProductQuantity(product);
                }, 0);

                if(quantity === 0) {
                    $rootScope.badgeColor = "badge-secondary"
                } else {
                    $rootScope.badgeColor = "badge-danger"
                }

                return quantity;
            }
       
    //});//end get firestore collection
    //console.log(id);
    $rootScope.products = productlist;
    $rootScope.sortColumn = "-rating";
    $rootScope.$apply();
       
      
    });// slut på then()

        //starrating
        const starsTotal = 5;
        $rootScope.rating = function(input) {
        return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
        }

        

}); //controller end



app.controller("getYear", function($rootScope){
    $rootScope.date = new Date();
});