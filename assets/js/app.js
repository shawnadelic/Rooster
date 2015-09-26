var rooster = angular.module('rooster', ['ngRoute', 'ngAnimate']);

rooster
  .controller('HomeController', function ($scope) {
    $scope.pageClass = 'page-home';
});

rooster
  .controller('AboutController', function ($scope) {
    $scope.pageClass = 'page-about';
});

rooster
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
