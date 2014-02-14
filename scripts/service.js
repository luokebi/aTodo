myTodo.factory("todoStorage", ["$q", "$rootScope", function ($q, $rootScope) {
    var factory = {
        getTodos: function() {
            var deferred = $q.defer();
            chrome.storage.local.get('todos', function(d) {
                $rootScope.$broadcast('refreshNumber', d['todos']);
                deferred.resolve(d['todos'] ? d['todos'] : []);
            });

            return deferred.promise;
        },

        update: function (todos) {
            chrome.storage.local.set({'todos':todos});
            $rootScope.$broadcast('refreshNumber', todos);
        }
    };

    return factory;
}]);