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
        plangularConfigProvider.clientId = "a91d18f0dd6bbb7c2007cd1f997a4c36";

    }).factory("Instagram", Instagram);


    // INJECTIONS
    Instagram.inject = ['$http'];


    /*
    Initiate connection to Instagram account
    It points to a particular url (playlist)
     */
    function Instagram($http) {
        var clientId = "392242.425a5b0.2867047a0a3543f38d3e6edf6c64c7d7";
        var userIdShanNash = "301474369";
        return {
            fetchRecentPosts: function(callback){
                var endpoint = "https://api.instagram.com/v1/users/" + userIdShanNash + "/media/recent/?client_id=" + clientId + "&callback=JSON_CALLBACK";
                $http.jsonp(endpoint).success(function(response){
                    callback(response.data);
                });
            }
        };
    }
