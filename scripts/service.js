myTodo.factory("todo", ['$rootScope', function ($rootScope) {
    var factory = {
        todos: [
            {content: "sdfs", complete: false},
            {content: "Test", complete: false},
            {content: "complete Shopping", complete: true}
        ],

        addTodo: function (todo) {
            this.todos.push( todo );
        },

        complete: function (content) {
            this.todos.forEach(function(t, index, arr) {
                if(t.content == content) {
                    console.log(!t.complete);
                    arr[index].complete = !t.complete;
                }
            });
        },

        delTodo: function (content) {
            this.todos.forEach(function(t, index, arr) {
               if(t.content == content) {
                   arr.splice(index, 1);
               }
            });
        }
    };

    return factory;
}]);