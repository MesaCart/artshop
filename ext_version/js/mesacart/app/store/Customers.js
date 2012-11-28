Ext.define('MC.store.Customers',{
	extend:'Ext.data.Store',
	storeId:'CustomersStore',
	model:'MC.model.Customer',
	
	proxy: {
        type: 'rest',
		url: 'http://www.mesacart.com/api/api.php/customer/',
		reader: {
			type:'json'
		},
		writer: {
			type:'json'
		}
    },
	autoload:true
	
});
