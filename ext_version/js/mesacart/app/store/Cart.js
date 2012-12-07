Ext.define('MC.store.Cart',{
	extend:'Ext.data.Store',
	storeId:'CartStore',
	model:'MC.model.Product'
	
	//no proxy client side store
	/*
	filters: [{
      
     }]
	*/
	
});