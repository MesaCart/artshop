Ext.define('MC.model.Order', {
        extend: 'Ext.data.Model',
	    fields: [
		     {name: 'id', type: 'int'},
		     {name: 'productId', type: 'int'},
		     {name: 'quantity', type: 'int'},
		     {name: 'customerId', type: 'int'},
		     {name: 'status', type: 'string'}
		     ],

	    proxy: {
	    type: 'rest',
                url: 'http://www.mesacart.com/api/api.php/order',
                reader: {
		type:'json'
		    },
                writer:{
		type:'json'
		    }
	}

    });