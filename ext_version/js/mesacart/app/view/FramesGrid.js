Ext.define('MC.view.FramesGrid',{
	extend:'Ext.grid.Panel',
	alias:'widget.FramesGrid',
	selModel: Ext.create('Ext.selection.CheckboxModel'),
	store:'Frames',
	autoScroll:true,
	
	columns: {
		items:[
		{text:'Id', dataIndex:'id'},
		{text:'Name', dataIndex:'name'},
		{text:'Desc', dataIndex: 'description'},
		{text:'Type??', dataIndex: 'type'},
		{text:'Sample', flex:3, 
					renderer: function(val){
						return '<img src ="' + val + '">';
					},
					dataIndex: 'picture'
				},
		{text:'Price', dataIndex: 'price'}
		],
		defaults: {
				flex: 1
		}
	
	
	},
	bbar: [
		{ xtype: 'button', text: 'Add Selected to cart' }
	]
	

});