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

myTodo.controller('add', function($scope, todoStorage, $rootScope) {
    $scope.content = '';

    $scope.add = function () {
        if ($scope.content === '') {
            return;
        }

        todoStorage.add({timeStamp: new Date().getTime(), content: $scope.content, complete: false});
        $scope.content = '';
        $rootScope.$broadcast('add');
    };

    $scope.keyDownHandler = function (e) {
        if (e.keyCode == 13) {
            $scope.add();
        }
    };
});


myTodo.controller('listCtrl', function($scope, todoStorage, $rootScope) {
         $scope.content = '';
         todoStorage.getTodos().then(function(data){
            console.log("data", data);
            $scope.todos = data;
            $rootScope.$broadcast('refreshNumber', data);
         });
         
        $scope.toggleComplete = function (timeStamp) {
           todoStorage.toggleComplete(timeStamp);
        };

        $scope.del = function (timeStamp) {
            todoStorage.del(timeStamp);
        };

    

});
