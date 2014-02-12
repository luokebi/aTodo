var myTodo = angular.module('myTodo', ['ngRoute']);

myTodo.config(function($routeProvider){
    $routeProvider
        .when('/all', {
            controller: "listCtrl",
            templateUrl: 'views/all.html'
        })
        .when('/active', {
           controller: "listCtrl",
           templateUrl: 'views/active.html'
        })
        .when('/complete', {
            controller: "listCtrl",
            templateUrl: 'views/complete.html'
        })
        .when('/', {
            redirectTo: "/all"
        });

})