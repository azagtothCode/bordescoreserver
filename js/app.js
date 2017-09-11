// var app = angular.module('score_federal', ['ngMaterial', 'chart.js'])
var app = angular.module('score_federal', ['ngMaterial'])


app.controller('TabController', ['$scope', function($scope) {
    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
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
