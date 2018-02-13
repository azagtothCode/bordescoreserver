app.controller('acorGrap',
  function($scope) {
  $scope.accordianData = [
    {
      "heading" : "Grafica"
    }
  ];

  $scope.collapseAll = function(data) {
     for(var i in $scope.accordianData) {
       if($scope.accordianData[i] != data) {
         $scope.accordianData[i].expanded = false;
       }
     }
     data.expanded = !data.expanded;
  };

})

app.controller('acorTrabajo',
      function($scope) {
    	$scope.accordianData = [
    		{
          "src" : "../imgs/svg/scorewhite.svg",
          "srcno" : "../imgs/svg/scoreblack.svg",
          "value" : (getQueryVariable('work')),
    			"heading" : "Trabajo Legislativo"
    		}
    	];

    	$scope.collapseAll = function(data) {
    	   for(var i in $scope.accordianData) {
    		   if($scope.accordianData[i] != data) {
    			   $scope.accordianData[i].expanded = false;
    		   }
    	   }
    	   data.expanded = !data.expanded;
    	};

    })

    app.controller('acorRol',
      function($scope) {
      $scope.accordianData = [
        {
          "src" : "../imgs/svg/scorewhite.svg",
          "srcno" : "../imgs/svg/scoreblack.svg",
          "value" : (getQueryVariable('rol')),
    			"heading" : "Rol Politico"
        }
      ];

      $scope.collapseAll = function(data) {
         for(var i in $scope.accordianData) {
           if($scope.accordianData[i] != data) {
             $scope.accordianData[i].expanded = false;
           }
         }
         data.expanded = !data.expanded;
      };

    })

    app.controller('acorExtra',
      function($scope) {
      $scope.accordianData = [
        {
          "src" : "../imgs/svg/scorewhite.svg",
          "srcno" : "../imgs/svg/scoreblack.svg",
          "value" : (getQueryVariable('ext')),
    			"heading" : "Extra Legislativo"
        }
      ];

      $scope.collapseAll = function(data) {
         for(var i in $scope.accordianData) {
           if($scope.accordianData[i] != data) {
             $scope.accordianData[i].expanded = false;
           }
         }
         data.expanded = !data.expanded;
      };

    })
