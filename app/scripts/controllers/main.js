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
        var twitterAPIKey = 'yjixRuBXQ3f0yhhwSEsN1LyB0';
        var twitterAPISecret = 'WN8wFQp9AdChh7VyuUVMBhTeG5gU98JoeamUip7HKC5dAivc5B';
        var twitterAccessToken = '1137572593-OdeDitmgTgMfygPuUbYHsN08OPwfPxPHoHcc90P';
        var twitterAccessTokenSecret = '364swe20cIxMHN6lgNcpWlWyKo3sbFzTPbTf1iuxtdy10';



        Instagram.fetchRecentPosts(function(data){
            $scope.items = data;
        });

        $twitterApi.configure(twitterAPIKey, twitterAPISecret, twitterAccessToken);
        $twitterApi.getHomeTimeline({count: 5}).then(function(data) {
            console.log(data);
        }, function(error) {
            console.log('err: ' + error);
        });
    });
