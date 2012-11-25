Ext.define('MC.view.Main',{
	extend: 'Ext.tab.Panel',
	alias:'widget.Main',
	itemId:'mainView',
	layout:{
		type:'card'
	},
	activeTab: 0,
	items: [
		{title:'Tab 1',
			html: 'card 1'
		},
		{title:'Tab 2',
			html: 'card 2'
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
		}
	],
});