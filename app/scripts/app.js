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
              .otherwise({
                redirectTo: '/'
              });

        //Soundcloud
        plangularConfigProvider.clientId = "5fe8f9dee33cffbd9d2ca2b6708641f1";

    }).factory("Instagram", Instagram);


    // INJECTIONS
    Instagram.inject = ['$http'];


    /*
    Initiate connection to Instagram account
    It points to a particular url (playlist)
     */
    function Instagram($http) {
        var clientId = "642176ece1e7445e99244cec26f4de1f";
        var userIdShanNash = "301474369";
        return {
            fetchRecentPosts: function(callback){
                var endpoint = "https://api.instagram.com/v1/users/" + userIdShanNash + "/media/recent/?&client_id=" + clientId + "&callback=JSON_CALLBACK";
                $http.jsonp(endpoint).success(function(response){
                    callback(response.data);
                });
            }
        };
    }
