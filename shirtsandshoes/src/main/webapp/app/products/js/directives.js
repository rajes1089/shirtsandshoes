angular.module('shirtsandshoes.products.directives',[]);

angular.module('shirtsandshoes.products.directives').directive('productThumbnail',[function(){
	return {
		restrict : 'E',
		scope : {
			product : '@productObj'
		},
		replace : true,
		templateUrl : 'app/products/views/productThumbnail.html'
	}
}]);