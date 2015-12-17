angular.module('shirtsandshoes.products',
		['shirtsandshoes.products.controllers',
         'shirtsandshoes.products.services',
         'shirtsandshoes.products.directives']
);

angular.module('shirtsandshoes.products').config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){

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

