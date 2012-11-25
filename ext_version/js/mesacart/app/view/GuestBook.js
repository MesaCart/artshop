Ext.define('MC.view.GuestBook',{
	extend:'Ext.grid.panel',
	alias:'widget.GuestBook',
	store:
	columns: [
		{text:'Id', dataIndex:'id'},
		{text:'Email', dataIndex: 'email'}
	]
}