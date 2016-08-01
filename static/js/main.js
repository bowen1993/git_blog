var blogger_manage_app = angular.module('blogger_manage_app', ['ngRoute', 'BloggerManageCtrl','ngMaterial','ngAnimate']);

blogger_manage_app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl:'./default.html',
    controller:'DefaultCtrl'
  }).when('/preview', {
  	templateUrl:'./preview.html',
  	controller:'PreviewCtrl'
  }).when('/edit',{
  	templateUrl:'./edit.html',
  	controller:'EditCtrl'
  }).otherwise({
    redirectTo: '/'
  });
}]);
