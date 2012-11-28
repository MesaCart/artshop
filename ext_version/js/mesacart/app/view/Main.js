Ext.define('MC.view.Main',{
	extend: 'Ext.tab.Panel',
	alias:'widget.Main',
	itemId:'mainView',
	layout:{
		type:'card'
	},
	activeTab: 0,
	items: [
		{title:'Home',
			html: '<font size="3" color="red">This is a test</font>'
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
		{title:'Customers(temp)',
			itemId:'CustomerTable',
			items:[
				{xtype:'CustomersView'},
				{xtype:'button',
					text:'butn'
				}
			]
		},
		{title:'Admin Login',
			itemId:'AdminLogin',
			items:[
				{xtype:'AdminMenu'}
			]
		},
		{title:'Admin Portal',
			itemId:'AdminPortal',
			items:[
				{xtype:'AdminMenu'}
			],
			html:'this is the admin portal',
			hidden:true
		},

	],
});