Ext.define('MC.store.Customers',{
	extend:'Ext.data.Store',
	model:'Customer',
	    proxy: {
        type: 'rest',
        url : baseUrl + '/customer'
    }

