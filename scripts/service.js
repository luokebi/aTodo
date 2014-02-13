myTodo.factory("todo", ['$rootScope',"$q", function ($rootScope, $q) {
    var factory = {
        getTodos: function() {
            var that = this;
            var deferred = $q.defer();
            chrome.storage.local.get('todos', function(d) {
                that.todos = d.todos;
                deferred.resolve();
            });

            return deferred.promise;
        },
        todos: [
            /*{content: "sdfs", complete: false},
            {content: "Test", complete: false},
            {content: "complete Shopping", complete: true}*/
        ],

        addTodo: function (todo) {
            var that = this;
            this.todos.push( todo );
            this.store();
            console.log(this.todos);
        },

        complete: function (content) {
            this.todos.forEach(function(t, index, arr) {
                if(t.content == content) {
                    console.log(!t.complete);
                    arr[index].complete = !t.complete;
                }
            });
            this.store();
            console.log(this.todos);
        },

        delTodo: function (content) {
            this.todos.forEach(function(t, index, arr) {
               if(t.content == content) {
                   arr.splice(index, 1);
               }
            });
            this.store();
        },

        store: function () {
            var that = this;
            chrome.storage.local.set({'todos':that.todos});
        }
    };

    return factory;
}]);