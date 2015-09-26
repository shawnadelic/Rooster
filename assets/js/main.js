var roosterhead = angular.module('roosterhead', ['ngRoute']);

roosterhead
  .controller('HomeController', function ($scope) {
    $scope.blah = 3;
  });

roosterhead
    .controller('AboutController', function ($scope) {});

roosterhead
     .config(function ($routeProvider, $locationProvider) {
           $routeProvider.
           when('/', {
                     templateUrl: 'partials/home.html',
                     controller: 'HomeController'
                 }).
           when('/about', {
                   templateUrl: 'partials/about.html',
                   controller: 'AboutController'
               })
           $locationProvider.html5Mode(true);
     });
