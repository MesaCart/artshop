Ext.define('MC.view.Customers',{
	extend:'Ext.grid.panel',
	alias:'widget.Customers',
	store:
	columns: [
		{text:'Id', dataIndex:'id'},
		{text:'Email', dataIndex: 'email'}
	]
}