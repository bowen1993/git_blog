var BloggerManageCtrl = angular.module('BloggerManageCtrl', []);
var $ = jQuery = require('./node_modules/jquery/dist/jquery.min.js');
const remote = require('electron').remote;

angular.module('BloggerManageCtrl', []).controller('windowCtrl', function($scope, $mdSidenav, $timeout){
  $scope.minimize = function(){
    var window = remote.getCurrentWindow();
    console.log('mini');
    window.minimize();
  }
  $scope.maximize = function(){
    var window = remote.getCurrentWindow();
    console.log("maxi");
    if (!window.isMaximized()) {
      window.maximize();
    } else {
      window.unmaximize();
    }
  }
  $scope.close = function(){
    var window = remote.getCurrentWindow();
    window.close();
  }
  $scope.toggleLeft = buildToggler('left');
  function buildToggler(navID) {
     return function() {
       // Component lookup should always be available since we are not using `ng-if`
       $mdSidenav(navID)
         .toggle()
         .then(function () {
         });
     }
   }
});
