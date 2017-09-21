app.controller('acorTrabajo',
      function($scope) {
    	$scope.accordianData = [
    		{
          "src" : "../imgs/svg/scorewhite.svg",
          "srcno" : "../imgs/svg/scoreblack.svg",
          "value" : "78",
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
          "value" : "78",
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
          "value" : "35",
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
