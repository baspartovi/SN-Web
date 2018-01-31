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
        plangularConfigProvider.clientId = "d5caeca128b2b18ac573a9bc18d297cc";

    });
