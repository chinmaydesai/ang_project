/*
var app = angular.module("myApp",[]);
app.controller("myController",function(){
	this.name="chinmay";
}); */


		var app = angular.module('myApp',["ui.router"])
					 .config(function ($stateProvider,$urlMatcherFactoryProvider,$urlRouterProvider,$locationProvider) {
					 	$urlMatcherFactoryProvider.caseInsensitive(true);  //for case insensitivity
					 	// $urlRouterProvider.otherwise("/one");   //for default route
					 $stateProvider

					 .state("home",{
					 	url:"/home",
					 	templateUrl : "home.html",
					 	controller : "homeController",
					 	controllerAs: "homectrl"
					 })

					 .state("course",{
					 	url:"/course",
					 	templateUrl : "courses.html",
					 	controller : "courseController",
					 	controllerAs: "coursectrl"
					 })

					 .state("student",{
					 	url:"/student",
					 	templateUrl : "Students.html",
					 	controller : "studentController as ctrl",
					 	// controllerAs: "ctrl"
					 })	
				})  

				 .controller("homeController", function ($state){
				 	this.message = "chinmay";
				 })
				 .controller("courseController", function ($state){
				 	this.course = "All Courses";
				 	this.courses = ["English","Marathi","Bengali","Hindi","Urdu"];
				 }) 
				 //.controller("studentController", function ($scope,$state,$http){
				 .controller("studentController", function ($state,$http){
				 	var vm=this;
				 	$http.get("projectback.php")
				 	.then(function (response){
				 		vm.studentsdet = response.data;
				 		//console.log(vm.studentsdet);
				 	})
				 }) 
	
