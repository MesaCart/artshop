Ext.define('MC.store.Customers',{
	extend:'Ext.data.Store',
	storeId:'CustomersStore',
	model:'MC.model.Customer',
	/*
	data:[
		{id: '1', name: 'Bob Johnson', email: 'bob@hotmail.com', address: '123 east street' },
	]
	*/
	
	proxy: {
        type: 'rest',
		url: 'http://mesacart.com/api/api.php/customer/',
        //url : baseUrl + '/api/customer/get.php',
		reader: {
			type:'json'
		},
		writer: {
			type:'json'
		}
    },
	autoload:true
	
});

