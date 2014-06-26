myTodo.filter('active', function () {
   var activeFilter = function (arr) {
    console.log(arr);
       return arr.filter(function(a) {
          return  a.complete == false;
       });
   };

   return activeFilter;
});

myTodo.filter('complete', function () {
    var completeFilter = function (arr) {
        return arr.filter(function(a) {
            return  a.complete == true;
        });
    };

    return completeFilter;
});