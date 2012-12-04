Ext.define('MC.view.CustomersView',{
	extend:'Ext.window.Window',
	title:'View Guests',
	alias:'widget.CustomersView',
	
	items:[
		{xtype:'grid',
			store:'Customers',
			columns: [
				{text:'Id', dataIndex:'id'},
				{text:'Name', dataIndex:'name'},
				{text:'Email', dataIndex: 'email'},
				{text:'Address', dataIndex: 'address'}
			]
		}
	]
	
});