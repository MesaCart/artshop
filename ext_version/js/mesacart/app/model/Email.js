Ext.define('MC.model.Email', {
	extend: 'Ext.data.Model',
	    fields: [
		     {name: 'id', type: 'int'},
		     {name: 'email', type: 'string'}
		     ],

            proxy: {
            type: 'rest',
		url: 'http://www.mesacart.com/api/api.php/email',
		reader: {
		type:'json'
                    },
		writer:{
		type:'json'
                    }
	    });