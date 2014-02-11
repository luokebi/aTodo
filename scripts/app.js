var myTodo = angular.module('myTodo', ['ngRoute']);

myTodo.config(function($routeProvider){
    $routeProvider
        .when('/all', {
            controller: "allCtrl",
            templateUrl: 'views/all.html'
        })
        .when('/active', {
           controller: "activeCtrl",
           templateUrl: 'views/active.html'
        })
        .when('/complete', {
            controller: "completeCtrl",
            templateUrl: 'views/complete.html'
        })
        .when('/', {
            redirectTo: "/active"
        });

})