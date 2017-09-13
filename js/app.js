// var app = angular.module('score_federal', ['ngMaterial', 'chart.js'])
var app = angular.module('score_federal', ['ngMaterial', 'chart.js'])


app.controller('TabController', ['$scope', function($scope) {
    $scope.tab = 1;
    if($scope.tab==1){
      document.getElementById("imageScoreTrabajo").src = "../imgs/svg/scoreblack.svg";
      document.getElementById("imageGlyphiTrabajo").src = "../imgs/svg/work.svg";
    }


    $scope.setTab = function(newTab){
      $scope.tab = newTab;

      if(newTab == 1){
        document.getElementById("imageScoreTrabajo").src = "../imgs/svg/scoreblack.svg";
        document.getElementById("imageGlyphiTrabajo").src = "../imgs/svg/work.svg";

        document.getElementById("imageScoreRol").src = "../imgs/svg/scorewhite.svg";
        document.getElementById("imageGlyphiRol").src = "../imgs/svg/workwhite.svg";

        document.getElementById("imageScoreExtra").src = "../imgs/svg/scorewhite.svg";
        document.getElementById("imageGlyphiExtra").src = "../imgs/svg/extrawhite.svg";
      }

      if(newTab == 2){
        document.getElementById("imageScoreRol").src = "../imgs/svg/scoreblack.svg";
        document.getElementById("imageGlyphiRol").src = "../imgs/svg/work.svg";

        document.getElementById("imageScoreTrabajo").src = "../imgs/svg/scorewhite.svg";
        document.getElementById("imageGlyphiTrabajo").src = "../imgs/svg/workwhite.svg";

        document.getElementById("imageScoreExtra").src = "../imgs/svg/scorewhite.svg";
        document.getElementById("imageGlyphiExtra").src = "../imgs/svg/extrawhite.svg";
      }

      if(newTab == 3){
        document.getElementById("imageScoreRol").src = "../imgs/svg/scorewhite.svg";
        document.getElementById("imageGlyphiRol").src = "../imgs/svg/workwhite.svg";

        document.getElementById("imageScoreTrabajo").src = "../imgs/svg/scorewhite.svg";
        document.getElementById("imageGlyphiTrabajo").src = "../imgs/svg/workwhite.svg";

        document.getElementById("imageScoreExtra").src = "../imgs/svg/scoreblack.svg";
        document.getElementById("imageGlyphiExtra").src = "../imgs/svg/extra.svg";
      }

    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };

    $scope.selectedIndex = 0;

  $scope.itemClicked = function ($index) {
    console.log($index);
    $scope.selectedIndex = $index;
  }

}])


app.controller('AppCtrl',
  function($scope) {
	$scope.accordianData = [
		{
			"heading" : "Trabajo Legislativo",
			"content" : ""
		},
		{
			"heading" : "Rol Politico",
			"content" : ""
		},
		{
			"heading" : "Extra Legislativo",
			"content" : ""
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

app.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: ['#990000', '#990000'],
      responsive: true
    });
    // Configure all line charts
  }])
