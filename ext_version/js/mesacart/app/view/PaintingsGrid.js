Ext.define('MC.view.PaintingsGrid',{
	extend:'Ext.grid.Panel',
	alias:'widget.PaintingsGrid',
	selModel: Ext.create('Ext.selection.CheckboxModel'),
	store:'Paintings',
	autoScroll:true,
	columns: {
			items:[
				{text:'Name', dataIndex:'name', flex:13},
				{text:'Desc', dataIndex: 'description', flex:18,
						renderer: function(val){
							return '<p>' + val + '</p>'
						}
				},
				{text:'Sample', flex:45, 
					renderer: function(val){
						return '<img src ="' + val + '" height="100" width="100">';
					},
					dataIndex: 'picture'
				},
				{text:'Price', dataIndex: 'price', flex:11},
				{text:'Quantity', dataIndex:'qty', flex:11, 
					editor: {xtype:'textarea', height:'100'}
			],
			defaults: {
				flex: 1
			}
	},
	bbar: [
		{ xtype: 'button', text: 'Add Selected to cart', 
			handler: function(){
				theGrid = this.up('grid');
				theSelModel = theGrid.getSelectionModel();
				item = theSelModel.getSelection()[0];
				console.log(item);
				var prompt = Ext.create('MC.view.QuantityPrompt');
				prompt.show();
				
				Ext.getStore('Cart').add(item);
				var confirmBox = Ext.create('Ext.window.MessageBox');
				confirmBox.alert('Added Items', 'Items were added to cart');
				theSelModel.deselectAll();
			}
		}
	]

	

});