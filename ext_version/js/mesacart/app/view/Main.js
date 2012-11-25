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
			html: 'paintings'
		},
		{title:'Framings',
			html: 'custom Framings'
		},
		{title:'Customers(temp)',
			xtype:'Customers'
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
		{title:'Guest Book',
			itemId:'GuestBook',
			xtype:'GuestBook'
		}
	],
});