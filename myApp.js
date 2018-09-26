var app = angular.module("myApp", []);
var animate = angular.module("myApp", ["ngRoute", "ngAnimate"]);
animate.config(function ($routeProvider) {
    $routeProvider
        .when('/kood', {
            controller: "codeController"
        })
        .when('/näide', {
            controller: "exampleController"
        })
        .when('/hide', {
            controller: "earthCtrl"

});
