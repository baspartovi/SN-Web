'use strict';

/**
 * @ngdoc function
 * @name snWebApp.controller:MainCtrl
 * @description
 * Created by Bas Partovi 2015
 * # MainCtrl
 * Controller of the snWebApp
 */
angular.module('snWebApp')
    .controller('MainCtrl', function ($scope, $twitterApi, Instagram) {
        $scope.items = [];
        $scope.data = {};

        Instagram.fetchRecentPosts(function(data){
            $scope.items = data;
        });

    });
