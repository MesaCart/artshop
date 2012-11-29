Ext.define('MC.view.CartWindow', {
	extend:'Ext.window.Window',
	title:'View/Edit Shopping Cart',
	modal:true,
	height:350,
	width:500,
	layout:'vbox',
	//layout for fields or fieldset??
	//layout:'form'
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
					{text:'Price', dataIndex: 'price', flex:11}
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
						items = theSelModel.getSelection();
						var confirmBox = Ext.create('Ext.window.MessageBox');
						confirmBox.alert('Added Items', 'Items were added to cart');
						theSelModel.deselectAll();
					}
				}
			]	
		}
	]

});
