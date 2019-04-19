var app = angular.module("bookShopApp", ["ngRoute", "ngCookies", "ngAnimate"]);

    app.run(function ($rootScope, $cookies){

        var storedCart =  $cookies.getObject('shoppingcart');
        if (storedCart) {
        $rootScope.cart = storedCart;
        } else {
        $rootScope.cart = [];
        }
    
    });
    
    app.config(($routeProvider, $locationProvider) => {
        $routeProvider
            .when("/", {
                controller: "homeController",
                templateUrl: "views/home.view.html"
            })
            .otherwise({ redirectTo: "/"});
    });
    
    app.controller("homeController", function($rootScope, $http)  {

        $http.get("http://localhost:3001/api/products").then((res) => $rootScope.products = res.data);

        //start shoppingcart
        let getProductId = function(products, id) {
            return _.find(products, function(product){
                return product.id === id
            });
        };

        //$rootScope.sortColumn = "rating";
        //$rootScope.cart = [];


        if($rootScope.cart.length === 0) {
        }

        $rootScope.addItem = function(product) {
            let found = getProductId($rootScope.cart, product.id);

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
            $cookies.putObject('shoppingcart', $rootScope.cart, {'expires': expireDate});
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
            //end shoppingcart

        //starrating
        const starsTotal = 5;
        $rootScope.rating = function(input) {
            return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
        };
        //end starrating

        //start include
        $rootScope.topNavigationComponent = "components/topnavigation.component.html";
        $rootScope.mainNavigationComponent = "components/mainnavigation.component.html";
        //$rootScope.aboutComponent = "components/about.component.html";
        $rootScope.heroComponent = "components/hero.component.html";
        $rootScope.filterComponent = "components/filter.component.html";
        $rootScope.bookComponent = "components/cards.component.html";
        $rootScope.shippingComponent = "components/shipping.component.html";
        $rootScope.bookNavigationComponent = "components/book.navigation.component.html"
        $rootScope.footerComponent = "components/footer.component.html"
    
        //$rootScope.userComponent = "components/login.component.html";


    
        $rootScope.changeBookComponent = function(component) {
            $rootScope.bookComponent = "components/" + component;
        }


        // $rootScope.changUserComponent = function(component) {
        //     $rootScope.userComponent = "components/" + component;
        // }
        //end include

        

    });//end homeController


/*--- START GETYEARCONTROLLER ---*/
app.controller("getYear", function($rootScope){
    $rootScope.date = new Date();
});
/*--- END GETYEARCONTROLLER ---*/

//back to top button
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
};