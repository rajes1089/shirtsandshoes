angular.module('shirtsandshoes.products.directives',[]);

angular.module('shirtsandshoes.products.directives').directive('productThumbnail',[function(){
	return {
		restrict : 'EA',
		scope : {
			product : '='
		},
		replace : true,
		templateUrl : 'app/products/views/product-tile.html'
	}
}]);