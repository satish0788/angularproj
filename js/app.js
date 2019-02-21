
var myApp = angular.module("myApp", ['ui.router'
]).config(function ($urlRouterProvider,$stateProvider) {

	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url:'/',
			templateUrl: 'html/Home.html',
			controller:"homeController"
		}).state('about', {
		url: '/about',
		templateUrl: 'html/about.html',
		controller: "aboutController"
	}).state('contact', {
		url: '/contact',
		templateUrl: 'html/contact.html',
		controller: "contactController"

	}).state('signup', {
		url: '/signup',
		templateUrl: 'html/signup.html',
		controller: "signupController"
	}).state('login', {
		url: '/login',
		templateUrl: 'html/login.html',
		controller: "loginController"
	})
		.state('AccessPoint', {
			url: '/AccessPoint',
			templateUrl: 'html/AccessPoints.html',
			controller: "accessPointController"
		})
		.state('RegisterApplications', {
			url: '/RegisterApplications',
			templateUrl: 'html/RegisterApplications.html',
			controller: "registerApplicationController"
		})
		.state('AccessGroups', {
			url: '/AccessGroups',
			templateUrl: 'html/AccessGroups.html',
			controller: "accessGroupController"
		})
		.state('SourceAppUsers', {
			url: '/SourceAppUsers',
			templateUrl: 'html/SourceAppUsers.html',
			controller: "sourceAppUserCtrl"
		})

		.state('SourceAppRoles', {
			url: '/SourceAppRoles',
			templateUrl: 'html/SourceAppRoles.html',
			controller: "sourceAppController"
		})

});





