Ext.define('MC.view.Viewport',{
	extend: 'Ext.container.Viewport', 
	//cls is the css class, we want background grey
	cls:'ViewportCls',
	layout: {
		//align:'center',
		pack:'center',
		type:'hbox',
		//maybe use column and then 80% width
		align:'stretch',
		border:true
	},
    items: [
		{xtype:'panel',
			layout:{
			type:'vbox',
			align:'stretch',
			pack:'start'
			},
			border:true,
			width: '80%',
			items:[
				{xtype:'TopBar',
					border:true,
					flex:2,
					//width:'100%',
					html:'toolbar/logo'
				},
				{xtype:'panel',
					border:true,
					flex:8,
					
					layout:{
						type:'hbox',
						align:'stretch',
						pack:'start'
					},
					items: [
						//{xtype:'SideBar'},
						{xtype:'SideBar',
							flex:22,
							height:'100%'
						},
						{xtype:'Main',
							flex:88,
							height:'100%'
						}
					],
					
					html:'lower'
				}
			]
		}
	]
});