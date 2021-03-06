angular.module('shirtsandshoes.products.services',[]);

angular.module('shirtsandshoes.products.services').factory('productService',['$http',function($http){
	return {
		
		getAll : function(){
			return $http.get('http://localhost:8082/ssapi/products');
		},
		
		getProductById : function(id){
			return $http.get('http://localhost:8082/ssapi/products/'+id,{cache:true});
		}
	}
}]);