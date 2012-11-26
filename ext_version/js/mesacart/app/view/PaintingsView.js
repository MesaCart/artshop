Ext.define('MC.view.PaintingsView',{
	extend:'Ext.grid.Panel',
	alias:'widget.PaintingsView',
	selModel: Ext.create('Ext.selection.CheckboxModel'),
	store:'Paintings',
	
	columns: [
		{text:'Id', dataIndex:'id'},
		{text:'Name', dataIndex:'name'},
		{text:'Desc', dataIndex: 'description'},
		{text:'Type??', dataIndex: 'type'},
		{text:'PicURl', dataIndex: 'pic'},
		{text:'Price', dataIndex: 'price'}/*,
		{text:'Select', items: [ {xtype:'checkbox'} ]}
		*/
	]
	
});