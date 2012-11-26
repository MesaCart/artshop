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
			html: 'card 1'
		},
		{title:'Paintings',
			items:[
				{xtype:'PaintingsView'}
			]
		},
		{title:'Framings',
			itemId:'FramesPage',
			items:[
				{xtype:'FramesView'}
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
				{xtype:'AdminLogin'}
			]
		},
		{title:'Admin Portal',
			itemId:'AdminPortal',
			html:'this is the admin portal',
			hidden:true
		},

	],
});