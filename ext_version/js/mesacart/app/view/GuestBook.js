Ext.define('MC.view.GuestBook',{
	extend:'Ext.grid.panel',
	alias:'widget.GuestBook',
	store: Ext.create('Ext.data.Store', {
		fields: [
			{ name:'email', type:'string' }
		],
		proxy: {
			type: 'rest',
			url: baseUrl + '/email'
		},
	}),
	
	columns: [
		{text:'Id', dataIndex:'id'},
		{text:'Email', dataIndex: 'email'}
	]
});