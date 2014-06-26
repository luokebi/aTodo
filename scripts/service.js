myTodo.factory("todoStorage", ["$q", "$rootScope", function ($q, $rootScope) {
    var factory = {
        todoData:null,

        getTodos: function() {
            var that = this;
            var deferred = $q.defer();
            if (this.todoData != null) {
                deferred.resolve(this.todoData);
            } else {
                chrome.storage.local.get('todos', function(d) {
                    setTimeout(function() {
                        that.todoData = d['todos'] ? d['todos'] : [];
                        console.log(that.todoData);
                        deferred.resolve(that.todoData);
                    }, 3000);

                });
            }
            
            return deferred.promise;
        },

        add: function (todo) {
            this.todoData.push(todo);
            this.update();
        },

        del: function (timeStamp) {
            this.todoData.forEach(function(t, index, arr) {
                if(t.timeStamp  == timeStamp) {
                    arr.splice(index, 1);
                }
            });

            this.update();
        },

        toggleComplete: function (timeStamp) {
            this.todoData.forEach(function(t, index, arr) {
                if(t.timeStamp == timeStamp) {
                    arr[index].complete = !t.complete;
                }
            });
            this.update();
        },

        update: function () {
            chrome.storage.local.set({'todos':this.todoData});
            $rootScope.$broadcast('refreshNumber', this.todoData);
        }
    };

    return factory;
}]);