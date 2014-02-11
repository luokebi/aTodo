function switcher ($scope, $location, $rootScope) {
    $scope.panelName = 'active';
    $scope.switchPanel = function(p) {
        $location.path(p);
        $scope.panelName = p;
    }

    $rootScope.$on('add', function() {
        $location.path('active');
        $scope.panelName = 'active';
    });
}

function add ($scope, todo, $rootScope) {
    $scope.content = '';

    $scope.add = function () {
        todo.addTodo({content: $scope.content, complete: false});
        console.log(todo.todos);
        $scope.content = '';
        $rootScope.$broadcast('add');
    };

}



function activeCtrl ($scope, todo) {
    $scope.todos = todo.todos;

    $scope.toggleComplete = function (content) {
        todo.complete(content);
        console.log(todo.todos);
    };

    $scope.del = function (content) {
        console.log("del todo");
        todo.delTodo(content);
        console.log(todo.todos);
    }
}

function allCtrl ($scope, todo) {
    $scope.todos = todo.todos;

    $scope.toggleComplete = function (content) {
        todo.complete(content);
        console.log(todo.todos);
    };

    $scope.del = function (content) {
        console.log("del todo");
        todo.delTodo(content);
        console.log(todo.todos);
    }
}


function completeCtrl ($scope, todo) {
    $scope.todos = todo.todos;

    $scope.toggleComplete = function (content) {
        todo.complete(content);
        console.log(todo.todos);
    };

    $scope.del = function (content) {
        console.log("del todo");
        todo.delTodo(content);
        console.log(todo.todos);
    }
}