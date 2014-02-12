myTodo.directive('canedit', function() {
   return {
       restrict: 'A',
       transclude: true,
       link: function (scope, element, attrs) {
           scope.showMe = false;
            element.on('dblclick', function() {
                scope.showMe = !scope.showMe;
                scope.$digest();
            });
       },
       template: '<span ng-transclude></span><input class="edit-input" ng-show="showMe" type="text" ng-model="t.content">'
   };
});