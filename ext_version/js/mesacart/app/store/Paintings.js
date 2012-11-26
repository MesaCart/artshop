Ext.define('MC.store.Paintings',{
	extend:'Ext.data.Store',
	storeId:'PaintingsStore',
	model:'MC.model.Product',
	
	data:[
		{id: '1', name: 'Bob Johnson', description: 'blah', type: 'painting', picture: 'null', price:'40' },
		{id: '2', name: 'fdsf Johnson', description: 'fds', type: 'painting', picture: 'fdfs', price:'40' }
	],
	
	
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
