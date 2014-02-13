myTodo.directive('canedit', function() {
   return {
       restrict: 'A',
       transclude: true,
       scope: true,
       link: function (scope, element, attrs) {
           scope.showMe = false;
            element.on('dblclick', function() {
                scope.showMe = !scope.showMe;
                scope.$digest();
                element.find('input')[0].focus();
            });

           angular.element(element.find('input')[0])
               .on('blur', function() {
               scope.showMe = false;
               scope.$digest();
           })
               .on('keydown', function(e) {
                   if (e.keyCode == 13) {
                       scope.showMe = false;
                       scope.$digest();
                   }
               });
       },
       template: '<span ng-transclude></span><input class="edit-input" ng-show="showMe" type="text" ng-model="t.content">'
   };
});