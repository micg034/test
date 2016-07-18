var app = angular.module('CV', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'HomeController',
    templateUrl: 'template/home.html'
  })
  .when('/photos/:id',{
    controller: 'PhotoController',
    templateUrl: 'template/photo.html'
  })
  .otherwise({
    redirectTo: '/',
  });
});
