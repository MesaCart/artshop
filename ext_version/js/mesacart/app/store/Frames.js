Ext.define('MC.store.Frames',{
	extend:'Ext.data.Store',
	storeId:'FrameStore',
	model:'MC.model.Product',
	/*
	data:[
		{id: '1', name: 'Bob Johnson', email: 'bob@hotmail.com', address: '123 east street' },
	]
	*/
	
	proxy: {
        //type: 'rest',
		type:'ajax',
		url: '../../data/Products.json',
        //url : baseUrl + '/api/customer/get.php',
		reader: {
			type:'json'
		}
    },
	autoload:true
	
});