angular.module('sskart',['ui.router','sskart.products']);

angular.module('sskart').run(['$state',function(state){
	state.go('products');
}]);