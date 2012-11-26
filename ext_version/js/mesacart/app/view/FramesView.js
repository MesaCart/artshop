Ext.define('MC.view.FramesView',{
	extend:'Ext.grid.Panel',
	alias:'widget.FramesView',
	html:'blah',
	
	store:'Frames',
	
	columns: [
		{text:'Id', dataIndex:'id'},
		{text:'Name', dataIndex:'name'},
		{text:'Desc', dataIndex: 'description'},
		{text:'Type??', dataIndex: 'type'},
		{text:'PicURl', dataIndex: 'pic'},
		{text:'Price', dataIndex: 'price'}
	]
	
});