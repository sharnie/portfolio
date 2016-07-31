angular
.module('Folio')
.config(['$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {

    // unknown goes to index
    $urlRouterProvider.otherwise( '/' );

    // no routes goes to index
    $urlRouterProvider.when( '', '/' );

    // states
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home.view.html',
            controller: 'homeController'
        });

}]);