
app.controller('OpenWindowController', function($scope) {
   $scope.openBorde = function() {
   window.open("http://bordepolitico.com/",'_blank');
   };
})

app.controller('OpenFacebookController', function($scope) {
   $scope.openFace = function() {
   window.open("https://es-la.facebook.com/BordePolitico/",'_blank');
   };
})

app.controller('OpenTwitterController', function($scope) {
   $scope.openTwit = function() {
   window.open("https://twitter.com/bordepolitico?lang=es",'_blank');
   };
})

app.controller('OpenBordePanel', function($scope) {
   $scope.openBordePanel = function() {
   window.open("http://bordepolitico.com/",'_blank');
   };
})

app.controller('OpenHomeController', function($scope) {
   $scope.openHome = function() {
   window.open("http://app.bordepolitico.com/",'_self');
   };
})

app.controller('OpenFederalController', function($scope) {
   $scope.openFederal = function() {
   window.open("http://app.bordepolitico.com/",'_self');
   };
})

app.controller('OpenJaliscoController', function($scope) {
   $scope.openJalisco = function() {
   window.open("http://appjalisco.bordepolitico.com/",'_blank');
   };
})

app.controller('OpenPueblaController', function($scope) {
   $scope.openPuebla = function() {
   window.open("http://apppuebla.bordepolitico.com/",'_blank');
   };
})

app.controller('OpenCDMXController', function($scope) {
   $scope.openCDMX = function() {
   window.open("http://appcdmx.bordepolitico.com/",'_blank');
   };
})

app.controller('OpenCSVController', function($scope) {
   $scope.openCSV = function() {
   window.open("docs/score.xlsx",'_blank');
   };
})

app.controller('OpenHowAboutController', function($scope) {
   $scope.openAbout = function() {
   window.open("http://bordepolitico.com/infografia-borde-score/",'_blank');
   };
})

.controller('OpenPartyScoreController', function($scope, $mdDialog) {
  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'party.score.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }

})
