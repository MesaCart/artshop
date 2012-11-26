Ext.define('MC.model.Customer', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id', type: 'int'},
		{name: 'name', type: 'string'},
		{name: 'email', type: 'string'},
		{name: 'address', type: 'string'}
	]
});