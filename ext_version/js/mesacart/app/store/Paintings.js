Ext.define('MC.store.Paintings',{
	extend:'Ext.data.Store',
	storeId:'PaintingsStore',
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
    },
	filters: [{
         property: 'type',
         value: /painting/
     }]
	
});
