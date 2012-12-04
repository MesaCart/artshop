Ext.define('MC.view.CartWindow', {
	extend:'Ext.window.Window',
	title:'View/Edit Shopping Cart',
	modal:true,
	height:350,
	width:700,
	layout:'fit',
	items:[
		{xtype:'grid',
			selModel: Ext.create('Ext.selection.CheckboxModel'),
			store:'Cart',
			autoScroll:true,
			columns: {
				items:[
					{text:'Name', dataIndex:'name', flex:13},
					{text:'Desc', dataIndex: 'description', flex:18,
							renderer: function(val){
								return '<p>' + val + '</p>'
							}
					},
					{text:'Type', flex:15, dataIndex: 'type'},
					{text:'Price', dataIndex: 'price', flex:11},
					{text:'Quantity', dataIndex:'qty', flex:4}
				],
				defaults: {
						flex: 1
				}
			},
			bbar: [
				{ xtype: 'button', text: 'Remove All', 
					handler: function(){
						theGrid = this.up('grid');
						theSelModel = theGrid.getSelectionModel();
						theSelModel.selectAll();
						var items = theSelModel.getSelection();
						Ext.getStore('Cart').remove(items);
						var confirmBox = Ext.create('Ext.window.MessageBox');
						confirmBox.alert('Added Items', 'Items were removed from cart');
						theSelModel.deselectAll();
					}
				}
			]	
		}
	]

});
