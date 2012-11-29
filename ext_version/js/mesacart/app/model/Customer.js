Ext.define('MC.model.Customer', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id', type: 'int'},
		{name: 'name', type: 'string'},
		{name: 'email', type: 'string'},
		{name: 'address', type: 'string'}
		 ],

        proxy: {
            type: 'rest',
			url: 'http://www.mesacart.com/api/api.php/customer',
			reader: {
				type:'json'
			},
			writer:{
				type:'json'
			}
		}
});