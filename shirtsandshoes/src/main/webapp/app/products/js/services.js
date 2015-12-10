angular.module('sskart.products.services',[]);

angular.module('sskart.products.services').factory('productService',['$http',function($http){
	return {
		
		products : [{"id":1,"name":"Business Shirt","description":"Wrinkle-free cotton business shirt","category":"Mens","available":true,"price":50,"image":null,"mimeType":null,"fileName":null,"lastUpdate":"2015-11-29"},{"id":2,"name":"Trousers","description":"Black trousers suitable for every business man","category":"Mens","available":true,"price":80,"image":null,"mimeType":"image/jpeg","fileName":"pants.jpg","lastUpdate":"2015-10-04"},{"id":3,"name":"Jacket","description":"Fully lined jacket which is both professional and extremely comfortable to wear","category":"Mens","available":true,"price":150,"image":null,"mimeType":"image/jpeg","fileName":"jacket.jpg","lastUpdate":"2015-10-04"},{"id":4,"name":"Blouse","description":"Silk blouse ideal for all business women","category":"Womens","available":true,"price":600,"image":null,"mimeType":"image/jpeg","fileName":"blouse.jpg","lastUpdate":"2015-11-12"},{"id":5,"name":"Skirt","description":"Wrinkle free skirt","category":"Womens","available":true,"price":80,"image":null,"mimeType":"image/jpeg","fileName":"skirt.jpg","lastUpdate":"2015-10-04"},{"id":6,"name":"Ladies Shoes","description":"Low heel and cushioned interior for comfort and style in simple yet elegant shoes","category":"Womens","available":true,"price":120,"image":null,"mimeType":"image/jpeg","fileName":"heels.jpg","lastUpdate":"2015-10-04"},{"id":7,"name":"Belt","description":"Leather belt","category":"Accessories","available":true,"price":30,"image":null,"mimeType":"image/jpeg","fileName":"belt.jpg","lastUpdate":"2015-10-04"},{"id":8,"name":"Bag","description":"Unisex bag suitable for carrying laptops with room for many additional items","category":"Accessories","available":true,"price":125,"image":null,"mimeType":"image/jpeg","fileName":"bag.jpg","lastUpdate":"2015-10-04"},{"id":9,"name":"Mens Shoes","description":"Leather upper and lower lace up shoes","category":"Mens","available":true,"price":110,"image":null,"mimeType":"image/jpeg","fileName":"shoes.jpg","lastUpdate":"2015-10-04"},{"id":10,"name":"Wallet","description":"Travel wallet suitable for men and women. Several compartments for credit cards, passports and cash","category":"Accessories","available":true,"price":50,"image":null,"mimeType":"image/jpeg","fileName":"wallet.jpg","lastUpdate":"2015-10-04"}],
		
		
		getAll : function(){
			/*$http.get('http://localhost:8082/ssapi/products').success(function(data){
				return data;
			});*/
			return this.products;
		},
		
		getProductById : function(id){
			/*$http.get('http://localhost:8082/ssapi/products/'+id).success(function(data){
				return data;
			});*/
			
			return {"id":2,"name":"Trousers","description":"Black trousers suitable for every business man","category":"Mens","available":true,"price":80,"image":null,"mimeType":"image/jpeg","fileName":"pants.jpg","lastUpdate":"2015-10-04"};
		}
	}
}]);