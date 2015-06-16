(function(){
  'use strict';

  angular.module('testApp', [])

  .controller('appCtrl', App)

  .directive('lista', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/lista.html'
    }
  });

  function App() {
    var vm = this;
    vm.name = 'what';
  }
})()