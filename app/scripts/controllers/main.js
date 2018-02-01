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
  .controller('MainCtrl', function ($scope) {

      $scope.shanNashTracksUrl = "https://soundcloud.com/shannash/sets/shan-nash-music";
      $scope.shanNashPlusHouse = "https://soundcloud.com/shannash/sets/plushouse-show";

      $scope.showPlayerOne = true;
      $scope.playerUrl = $scope.shanNashTracksUrl;

  });
