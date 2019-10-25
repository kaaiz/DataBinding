angular.module("MyFirstApp", []);
.controller("FirstController", function($scope){
	$scope.nombre ="Alvaro";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{
			comentario: "Buen Tutorial",
			username: "Alvaro"
		},
		{
			comentario: "Mal Tutorial",
			username: "Nicolas"
		}
	];
	$scope.agregarComentario = function(){

		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	}
});