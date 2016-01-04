angular.module('shirtsandshoes.cart.services',[]);


angular.module('shirtsandshoes.cart.services').factory('cartService',[function(){
	
	var cart = {};
	
	cart.items = [];
	
	cart.addItem = function(item){
		cart.items.push(item);
	};
	
	cart.removeItem = function(index){
		cart.items.splice(1,index);
	};
	
/*	cart.getTotal = function(){
		angular.forEach(cart.)
	}*/
	
}]);