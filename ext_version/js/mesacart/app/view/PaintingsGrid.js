Ext.define('MC.view.PaintingsGrid',{
	extend:'Ext.grid.Panel',
	alias:'widget.PaintingsGrid',
	selModel: Ext.create('Ext.selection.CheckboxModel'),
	store:'Paintings',
	
	columns: [
		{text:'Id', dataIndex:'id'},
		{text:'Name', dataIndex:'name'},
		{text:'Desc', dataIndex: 'description'},
		{text:'Type??', dataIndex: 'type'},
		{text:'PicURl', 
			renderer: function(val){
				return '<img src ="' + val + '">';
			},
			dataIndex: 'picture'
		},
		{text:'Price', dataIndex: 'price'}
	],
	

});