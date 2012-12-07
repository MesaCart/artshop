Ext.define('MC.store.AllProducts',{
	extend:'Ext.data.Store',
	storeId:'ProductsStore',
	model:'MC.model.Product',
	
	proxy: {
        type: 'rest',
		url: 'http://www.mesacart.com/api/api.php/product',
		reader: {
			type:'json'
		},
		writer:{
			type:'json'
		}
    }
	/*
	filters: [{
      
     }]
	*/
	
});