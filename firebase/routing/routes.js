app.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/', {
        templateUrl: 'views/cards.view.html'
        })
        .when('/cards', {
            templateUrl: 'views/cards.view.html'
        })
        .when('/rows', {
            templateUrl: 'views/rows.view.html'
        })
        .when('/about', {
            templateUrl: 'views/about.view.html'
        })
        .when('/services', {
            templateUrl: 'views/services.view.html'
        })
        .when('/pages', {
            templateUrl: 'views/pages.view.html'
        })
        .when('/news', {
            templateUrl: 'views/news.view.html'
        })
        .when('/contact', {
            templateUrl: 'views/contact.view.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);