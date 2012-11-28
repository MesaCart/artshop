Ext.define('MC.view.FramesGrid',{
	extend:'Ext.grid.Panel',
	alias:'widget.FramesGrid',
	selModel: Ext.create('Ext.selection.CheckboxModel'),
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