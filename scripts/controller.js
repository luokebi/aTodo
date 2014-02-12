function switcher ($scope, $location, $rootScope, todo) {
    $scope.panelName = 'all';
    $scope.todos = todo.todos;
    $scope.switchPanel = function(p) {
        $location.path(p);
        $scope.panelName = p;
    };

    refreshNumber();

    function refreshNumber () {
        $scope.activeNumber = $scope.todos.filter(function (t) {
            return t.complete == false;
        }).length;
    }

    $rootScope.$on('add', function() {
        $location.path('all');
        $scope.panelName = 'all';
    });

    $scope.$watch('todos', function() {
        refreshNumber();
    }, true);
}

function add ($scope, todo, $rootScope) {
    $scope.content = '';

    $scope.add = function () {
        if ($scope.content == '') {
            return;
        }
        todo.addTodo({content: $scope.content, complete: false});
        console.log(todo.todos);
        $scope.content = '';
        $rootScope.$broadcast('add');
    };

    $scope.keyDownHandler = function (e) {
        if (e.keyCode == 13) {
            $scope.add();
        }
    };



}

myTodo.controller('listCtrl', function($scope, todo) {
    $scope.todos = todo.todos;

    $scope.toggleComplete = function (content) {
        todo.complete(content);
    };

    $scope.del = function (content) {
        todo.delTodo(content);
    }
});
