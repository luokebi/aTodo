myTodo.filter('active', function () {
   var activeFilter = function (arr) {
       return arr.filter(function(a) {
          return  a.complete == false;
       });
   };

   return activeFilter;
});

myTodo.filter('complete', function () {
    var activeFilter = function (arr) {
        return arr.filter(function(a) {
            return  a.complete == true;
        });
    };

    return activeFilter;
});