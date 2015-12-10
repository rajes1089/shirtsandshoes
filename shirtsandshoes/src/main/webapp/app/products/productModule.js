angular.module('sskart.products',['sskart.products.controllers','sskart.products.services']);

angular.module('sskart.products').config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){

	$stateProvider.state('products',{
		url:'/products',
		templateUrl:'app/products/views/products.html',
		controller: 'ProductController'
	});
	
	$stateProvider.state('product',{
		url:'/products/:id',
		templateUrl:'app/products/views/product-detail.html',
		controller: 'ProductDetailsController'
	});

}]);

