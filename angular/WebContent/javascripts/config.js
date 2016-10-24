var app=angular.module('myapp', [ 'ngRoute' ]);

app.config(function($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: '/login.html',
			controller: 'mainController'
		})
		.when('/loginSuccess', {
			templateUrl: 'template/login/loginSuccess.html',
			controller: 'myCtrl2'
		})
		.when('/registrationPage', {
			templateUrl: 'template/registration/registrationPage.html',
			controller: 'mainController'
		})
		/* .when('/registrationSuccess', {
			templateUrl: 'template/registration/registrationSuccess.html',
			controller: 'myCtrl1'
		})
		.when('/updateProfile', {
			templateUrl: 'updateProfile.html',
			controller: '"myCtrl3"'
		})
		.when('/updateSuccess', {
			templateUrl: 'updateSuccess.html',
			controller: 'myCtrl4'
		})*/
		.otherwise('',{
			redirectTo: '/login'
		});

});
