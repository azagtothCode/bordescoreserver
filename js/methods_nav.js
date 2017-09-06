app.controller('SelectAsyncController', function($timeout, $scope) {
  $scope.user = null;
  $scope.users = null;

  $scope.loadUsers = function() {

    // Use timeout to simulate a 650ms request.
    return $timeout(function() {

      $scope.users =  $scope.users  || [
        { id: 1, name: 'Federal' },
        { id: 2, name: 'Puebla' },
        { id: 3, name: 'Jalisco' },
        { id: 4, name: 'CDMX' }
      ];
    }, 650);
  };
})
