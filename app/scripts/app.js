'use strict';

/**
 * @ngdoc overview
 * @name snWebApp
 * @description
 * # snWebApp
 * Created by Bas Partovi 2015
 * Main module of the application.
 */
angular
    .module('snWebApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'plangular'
    ])
    .config(function ($routeProvider, plangularConfigProvider) {
        $routeProvider
              .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
              })
              .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
              })
              .otherwise({
                redirectTo: '/'
              });
        plangularConfigProvider.clientId = '5fe8f9dee33cffbd9d2ca2b6708641f1';
    })
    .factory("Instagram", ['$http', function($http) {
        var clientId = "f7957cfe23274aa99b75f180c2a82cb4";
        var userIdShanNash = "301474369";
        return {
            fetchRecentPosts: function(callback){
                //var endpoint = "https://api.instagram.com/v1/users/" + userIdBasp + "/media/recent/?";
                var endpoint = "https://api.instagram.com/v1/users/" + userIdShanNash + "/media/recent/?&client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK";
                //var endpoint2 = "https://api.instagram.com/v1/media/popular?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK";
                $http.jsonp(endpoint).success(function(response){
                    callback(response.data);
                });
            }
        };
    }]);
