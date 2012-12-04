Ext.define('MC.view.FramesGrid',{
	extend:'Ext.grid.Panel',
	alias:'widget.FramesGrid',
	selModel: Ext.create('Ext.selection.CheckboxModel'),
	store:'Frames',
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
						return '<img src ="' + val + '">';
					},
					dataIndex: 'picture'
			},
			{text:'Price', dataIndex: 'price', flex:11}
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
				Ext.getStore('Cart').add(item);
				var confirmBox = Ext.create('Ext.window.MessageBox');
				confirmBox.alert('Added Items', 'Items were added to cart');
				theSelModel.deselectAll();
			}		
		}
	]
	

});