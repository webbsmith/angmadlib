/*global angular*/
/*global console*/

var app = angular.module("madLibApp", []);

app.controller("madLibController", ["$scope", function ($scope) {
    'use strict';
    
    $scope.madLibInputComplete = false;
    
    $scope.positionOfAuthority = {};
    $scope.place = {};
    $scope.emotion = {};
    $scope.adjective = {};
    $scope.verb = {};
    $scope.adverb = {};
    
    $scope.positionOfAuthority[0] = 'King Fred';
    
    $scope.madLibVisibility = [false, false, false];
    
    var randomIdx;
    $scope.displayRandomMadlib = function () {
        $scope.madLibInputComplete = true;
        /* generate new random idx (different from previous) */
        var newRandomIdx;
        do {
            newRandomIdx = Math.floor((Math.random() * 3));
        } while (randomIdx === newRandomIdx);
        
        randomIdx = newRandomIdx;
        
        $scope.setVisible(randomIdx);
    };
    
    $scope.setVisible = function (madLibIdx) {
        /* reset existing madLibVisibility */
        var i;
        for (i = 0; i < $scope.madLibVisibility.length; i = i + 1) {
            $scope.madLibVisibility[i] = false;
        }
        
        /* show the mad lib at the provided index */
        $scope.madLibVisibility[madLibIdx] = true;
    };
    
    $scope.isVisible = function (madLibIdx) {
        return $scope.madLibVisibility[madLibIdx] === true;
    };
    
}]);