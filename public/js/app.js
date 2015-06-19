(function(){
  'use strict';

  angular.module('testApp', ['ngMessages'])

  .controller('appCtrl', App)

  .directive('lista', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/lista.html'
    };
  })

  .directive('ngFocus', function(){
    var FOCUS_CLASS = 'ngFocus';
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ctrl) {
        ctrl.$focused = false;
        element
        .bind('focus', function(evt){
          element.addClass(FOCUS_CLASS);
          scope.$apply(function(){
            ctrl.$focused = true;
          });
        })
        .bind('blur', function(evt){
          element.removeClass(FOCUS_CLASS);
          scope.$apply(function(){
            ctrl.$focused = false;
          });
        });
      }
    };
  })

  .directive('myA', function(){
    return {
      restrict: 'E',
      replace: true,
      scope: {
        myUrl: '@'
      },
      template: '<a href="{{myUrl}}">text</a>'
    }
  });

  function App() {
    var vm = this;
    vm.name = 'what';
  }
})()
