Ext.define('MC.view.Main',{
	extend: 'Ext.tab.Panel',
	alias:'widget.Main',
	itemId:'mainView',
	cls:'MainViewCls',
	layout:{
		type:'card'
	},
	activeTab: 0,
	items: [
	
		{title:'Home',
			itemId:'HomePage',
			layout:'fit',
			items:[
				{xtype:'NewsGrid'}
			]
			
		},
		{title:'Paintings',
			itemId:'PaintingsPage',
			layout:'fit',
			items:[
				{xtype:'PaintingsGrid'}
			]
		},
		{title:'Framings',
			itemId:'FramesPage',
			layout:'fit',
			items:[
				{xtype:'FramesGrid'}
			]
		},
		{title:'Admin Login',
			itemId:'AdminLogin',
			items:[
				{xtype:'AdminLogin'}
			]
		},
		{title:'Admin Portal',
			itemId:'AdminPortal',
			items:[
				{xtype:'AdminMenu'}
			],
			hidden:true
		},
	]
});
