
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

app.controller('OpenPartyScoreController', function($scope) {
   $scope.openParty = function() {
   window.open("parys.html",'_blank');
   };
})
