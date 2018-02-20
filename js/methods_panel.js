app.controller('PanelCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */

    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      };
    }
  })
  //controller open panel side left
  app.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  })

  //controller open panel side left
  app.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  })

  app.controller('PanelContentIndexController', function($scope) {

    var imagePathLegis   = 'imgs/svg/logo_borde.svg';
    var imagePathSen     = 'imgs/svg/logo_borde.svg';
    var imagePathIub     = 'imgs/svg/logo_inter.svg';
    var imagePathJalisco = 'imgs/svg/logo_juridico.svg';
    var imagePathPuebla  = 'imgs/svg/logo_politico.svg';
    var imagePathReforma = 'imgs/svg/logo_reforma.svg';
    var imagePathInco    = 'imgs/svg/logo_inco.svg';
    var imagePathPhone   = 'imgs/svg/logo_politico.svg';

    $scope.linksDirectory = [
      {
        face : imagePathLegis,
        who: 'Senadores Perfiles',
        address: '#'
      },
      {
        face : imagePathSen,
        who: 'Diputados Perfiles',
        address: '#'

      }
    ];

    $scope.linksDirectoryOtherSites = [

      {
        face : imagePathInco,
        who: 'App Incorruptible',
        address: 'http://incorruptible.mx/'
      },
      {
        face : imagePathJalisco,
        who: 'Borde Jalisco'
      },
      {
        face : imagePathPuebla,
        who: 'Borde Puebla'
      },
      {
        face : imagePathIub,
        who: 'Interfaz de Usuario'
      },
      {
        face : imagePathReforma,
        who: 'Reforma Penal',
        address: 'http://reformapenal.org/'
      }
    ];

    $scope.phones = [
      {
        type: 'Local',
        number: '(555) 251-1234',
        options: {
          face : imagePathPhone,
          icon: 'communication:phone'
        }
      }
    ];
})
app.controller('PanelContentProfileController', function($scope) {

  var imagePathLegis   = '../svg/logo_borde.svg';
  var imagePathSen     = '../svg/logo_juridico.svg';
  var imagePathIub     = '../svg/logo_inter.svg';
  var imagePathJalisco = '../svg/logo_juridico.svg';
  var imagePathPuebla  = '../svg/logo_politico.svg';
  var imagePathReforma = '../svg/logo_reforma.svg';
  var imagePathInco    = '../svg/logo_inco.svg';
  var imagePathPhone   = '../svg/logo_politico.svg';

  $scope.linksDirectoryOtherSites = [
    {
      face : imagePathIub,
      who: 'Interfaz de Usuario'
    },
    {
      face : imagePathJalisco,
      who: 'Borde Jalisco'
    },
    {
      face : imagePathPuebla,
      who: 'Borde Puebla'
    },
    {
      face : imagePathInco,
      who: 'App Incorruptible'
    },
    {
      face : imagePathReforma,
      who: 'Reforma Penal'
    }
  ];

  $scope.phones = [
    {
      type: 'Local',
      number: '(55) 5251-1234',
      options: {
        face : imagePathPhone,
        icon: 'communication:phone'
      }
    }
  ];
})
