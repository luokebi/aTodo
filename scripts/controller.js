function switcher ($scope, $location) {
    $scope.panelName = 'all';
    $scope.activeNumber = 0;
        $scope.switchPanel = function(p) {
            $location.path(p);
            $scope.panelName = p;
        };


        function refreshNumber (todos) {
            $scope.activeNumber = todos.filter(function (t) {
                return t.complete == false;
            }).length;
        }

        $scope.$on('add', function() {
            $location.path('all');
            $scope.panelName = 'all';
        });

        $scope.$on('refreshNumber', function(e, todos) {
           refreshNumber(todos);
        });


}


myTodo.controller('listCtrl', function($scope, todoStorage, $rootScope, todoData) {
         $scope.content = '';
         $scope.todos = todoData;

        $scope.toggleComplete = function (content) {
            $scope.todos.forEach(function(t, index, arr) {
                if(t.content == content) {
                    arr[index].complete = !t.complete;
                }
            });
            todoStorage.update($scope.todos);
        };

        $scope.del = function (content) {
            $scope.todos.forEach(function(t, index, arr) {
                if(t.content == content) {
                    arr.splice(index, 1);
                }
            });

            todoStorage.update($scope.todos);
        };

    $scope.add = function () {
        if ($scope.content == '') {
            return;
        }

        $scope.todos.push({content: $scope.content, complete: false});
        $scope.content = '';
        $rootScope.$broadcast('add');

        todoStorage.update($scope.todos);
    };

    $scope.keyDownHandler = function (e) {
        if (e.keyCode == 13) {
            $scope.add();
        }
    };

});
