
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

app.controller('OpenPanelScoreController', function($scope, $mdDialog) {
  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'other_sites/party.score.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      // $scope.status = 'You said the information was "' + answer + '".';
      console.log(answer);
    }, function() {
      // $scope.status = 'You cancelled the dialog.';
      console.log("close dialog");
    });
  };

  $scope.openAbout = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'other_sites/about.score.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      // $scope.status = 'You said the information was "' + answer + '".';
      console.log(answer);
    }, function() {
      // $scope.status = 'You cancelled the dialog.';
      console.log("close dialog");
    });
  };

  $scope.openPerfil = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'other_sites/perfil.score.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      // $scope.status = 'You said the information was "' + answer + '".';
      console.log(answer);
    }, function() {
      // $scope.status = 'You cancelled the dialog.';
      console.log("close dialog");
    });
  };

  $scope.openGraphsProfile = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'graphs.score.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      // $scope.status = 'You said the information was "' + answer + '".';
      console.log(answer);
    }, function() {
      // $scope.status = 'You cancelled the dialog.';
      console.log("close dialog");
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

app.controller('OpenPerfilController', function($scope) {
   $scope.openPerfilPage = function(legId){
    //  window.open("other_sites/profile_"+legId+".html",'_blank');
     window.open("other_sites/profile.html",'_blank');
   };
})

var doughnutData = [
                {
                    value: 20,
                    color:"#EE4455",
                    highlight: "#FF5A5E",
                    label: "Trabajo",
                },
                {
                    value: 50,
                    color: "#FFC73F",
                    highlight: "#FFC870",
                    label: "Rol"
                },
                {
                    value: 30,
                    color: "#FF974C",
                    highlight: "#FFC870",
                    label: "Extra"
                }

            ];


var ctx1 = $("#d1").get(0).getContext("2d");
var myChart1 = new Chart(ctx1).Doughnut(doughnutData, {
    percentageInnerCutout: 70
});

var ctx1 = $("#d2").get(0).getContext("2d");
var myChart1 = new Chart(ctx1).Doughnut(doughnutData, {
    percentageInnerCutout: 80
});


// open /Applications/Google\ Chrome.app --args --allow-file-access-from-files
