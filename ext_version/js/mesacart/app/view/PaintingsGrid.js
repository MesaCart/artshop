Ext.define('MC.view.PaintingsGrid',{
	extend:'Ext.grid.Panel',
	alias:'widget.PaintingsGrid',
	selModel: Ext.create('Ext.selection.CheckboxModel'),
	store:'Paintings',
	autoScroll:true,
	columns: {
			items:[
				//{text:'Id', dataIndex:'id'},
				{text:'Name', dataIndex:'name'},
				{text:'Desc', dataIndex: 'description'},
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