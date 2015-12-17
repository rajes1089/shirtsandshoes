angular.module('shirtsandshoes',['ui.router','shirtsandshoes.products']);

angular.module('shirtsandshoes').run(['$state',function(state){
	state.go('products');
}]);