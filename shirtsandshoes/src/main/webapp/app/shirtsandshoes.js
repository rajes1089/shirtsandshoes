angular.module('shirtsandshoes',['ui.router',
                                 'shirtsandshoes.products',
                                 'shirtsandshoes.cart']);

angular.module('shirtsandshoes').run(['$state',function(state){
	state.go('products');
}]);