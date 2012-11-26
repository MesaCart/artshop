Ext.define('MC.model.Product', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id', type: 'int'},
		{name: 'name', type: 'string'},
		{name: 'description', type: 'string'},
		{name: 'type', type: 'string'},
		{name: 'picture', type: 'string'},
		{name: 'price', type: 'string'}
	]
});