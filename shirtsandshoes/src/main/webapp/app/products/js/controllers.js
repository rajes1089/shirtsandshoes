angular.module('sskart.products.controllers',[]);



angular.module('sskart.products.controllers').controller('ProductController',[
'$scope',
'productService',
function($scope,productService){
	
	$scope.getAllProducts = function(){
		productService.getAll().success(function(data){
			$scope.products = data;
		});
	}
	
	$scope.getAllProducts();
}
]);




angular.module('sskart.products.controllers').controller('ProductDetailsController',[
'$scope',
'$state',
'$stateParams',
'productService',
function($scope,$state,$stateParams,productService){

	$scope.getProductById = function(id){
		productService.getProductById(id).success(function(data){
			$scope.product=data;
		});
	};
			
	$scope.closeProduct = function(){
		$state.go('products');		
	};
	
	$scope.getProductById($stateParams.id);
}
]);