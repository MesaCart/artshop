Ext.define('MC.view.CustomersView',{
	extend:'Ext.window.Window',
	title:'View Guests',
	cls:'CustomersViewCls',
	alias:'widget.CustomersView',
	modal:true,
	height:350,
	width:700,
	layout:'fit',
	
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