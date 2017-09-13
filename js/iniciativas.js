app.controller('IniciativasController', function($scope) {
$scope.iniciativas = [
  {body:'Con proyecto de decreto para inscribir con Letras de Oro en el Muro de Honor del Palacio Legislativo de San Lázaro el nombre -Batallas de Celaya-. Con proyecto de decreto para inscribir con Letras de Oro en el Muro de Honor del Palacio Legislativo de San Lázaro el nombre -Batallas de Celaya-.',theme:'Cultura', src:"http://sil.gobernacion.gob.mx/Archivos/Documentos/2017/04/asun_3534545_20170427_1490832918.pdf"},
  {body:'Con proyecto de Ley del Salario Mínimo General, Reglamentaria del Artículo 123 de la Constitución Política de los Estados Unidos Mexicanos y se adicionan diversas disposiciones de la Ley Federal del Trabajo y de la Ley sobre la Aprobación de Tratados Internacionales en Materia Económica.',theme:'Seguridad', src:"http://sil.gobernacion.gob.mx/Archivos/Documentos/2017/04/asun_3534545_20170427_1490832918.pdf"},
  {body:'Con Proyecto de Presupuesto de Egresos de la Federación para el Ejercicio Fiscal 2018.',theme:'Desarrollo', src:"http://sil.gobernacion.gob.mx/Archivos/Documentos/2017/04/asun_3534545_20170427_1490832918.pdf"},
  {body:'Con proyecto de decreto para inscribir con Letras de Oro en el Muro de Honor del Palacio Legislativo de San Lázaro el nombre -Batallas de Celaya-. Con proyecto de decreto para inscribir con Letras de Oro en el Muro de Honor del Palacio Legislativo de San Lázaro el nombre -Batallas de Celaya-.',theme:'Cultura', src:"http://sil.gobernacion.gob.mx/Archivos/Documentos/2017/04/asun_3534545_20170427_1490832918.pdf"},
  {body:'Con proyecto de Ley del Salario Mínimo General, Reglamentaria del Artículo 123 de la Constitución Política de los Estados Unidos Mexicanos y se adicionan diversas disposiciones de la Ley Federal del Trabajo y de la Ley sobre la Aprobación de Tratados Internacionales en Materia Económica.',theme:'Seguridad', src:"http://sil.gobernacion.gob.mx/Archivos/Documentos/2017/04/asun_3534545_20170427_1490832918.pdf"},
  {body:'Con Proyecto de Presupuesto de Egresos de la Federación para el Ejercicio Fiscal 2018.',theme:'Desarrollo', src:"http://sil.gobernacion.gob.mx/Archivos/Documentos/2017/04/asun_3534545_20170427_1490832918.pdf"},
  ];
})


app.controller("BarCtrlIniciativas", function ($scope) {
  $scope.labels = ['Aprobadas', 'Presentadas', 'Retiradas', 'Desechadas', 'Pendientes'];
  $scope.series = ['Iniciativas'];

  $scope.data = [
    [13, 17, 7, 12, 6]
  ];
})
