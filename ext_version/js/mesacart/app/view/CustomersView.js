Ext.define('MC.view.CustomersView',{
	extend:'Ext.grid.Panel',
	alias:'widget.CustomersView',
	html:'blah',
	
	store:'Customers',
	
	columns: [
		{text:'Id', dataIndex:'id'},
		{text:'Name', dataIndex:'name'},
		{text:'Email', dataIndex: 'email'},
		{text:'Address', dataIndex: 'address'}
	]
	
});