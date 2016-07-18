angular.module('Khitwa.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.Khitwa', token);
        $location.path('/events');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.Khitwa', token);
        $location.path('/events');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});