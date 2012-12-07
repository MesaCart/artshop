Ext.define('MC.view.Admin.RemoveProducts',{
	extend:'Ext.window.Window',
	alias:'widget.RemoveProducts',
	title:'Remove Products',
	modal:true,
	height:350,
	width:700,
	layout:'fit',
	
	items: [
	
		{xtype:'grid',
			selModel: Ext.create('Ext.selection.CheckboxModel'),
			store:'Paintings',
			autoScroll:true,
			columns: {
					items:[
						{text:'Name', dataIndex:'name'},
						{text:'Desc', dataIndex: 'description', flex:2,
								renderer: function(val){
									return '<p>' + val + '</p>'
								}
						},
						{text:'Type', flex:19, dataIndex: 'type' },
						{text:'Price', dataIndex: 'price'}
					],
					defaults: {
						flex: 1
					}
			},

			bbar: [
				{ xtype: 'button', text: 'Remove Selected Product Listing', 
					handler: function(){
						theGrid = this.up('grid');
						theSelModel = theGrid.getSelectionModel();
						item = theSelModel.getSelection()[0];			
						Ext.getStore('AllProducts').remove(item);
						Ext.getStore('AllProducts').sync();
						//Ext.getStore('Cart').add(item);
						var confirmBox = Ext.create('Ext.window.MessageBox');
						confirmBox.alert('Removed item from inventory');
						theSelModel.deselectAll();
						Ext.getStore('AllProducts').load();
					}
				}
			]
		}
	]

});