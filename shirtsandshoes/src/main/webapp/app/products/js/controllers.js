angular.module('sskart.products.controllers',[]);



angular.module('sskart.products.controllers').controller('ProductController',[
'$scope',
'productService',
function($scope,productService){
	
	$scope.getAllProducts = function(){
		return productService.getAll();
	}
	
	$scope.products = $scope.getAllProducts();
}
]);




angular.module('sskart.products.controllers').controller('ProductDetailsController',[
'$scope',
'$state',
'$stateParams',
'productService',
function($scope,$state,$stateParams,productService){

	$scope.getProductById = function(id){
		return productService.getProductById(id);
	};
			
	$scope.closeProduct = function(){
		$state.go('products');		
	};
	
	$scope.product = $scope.getProductById($stateParams.id);
}
]);