Ext.define('MC.view.AdminMenu', {
	extend:'Ext.panel.Panel',
	cls:'AdminMenuCls',
	alias:'widget.AdminMenu',
	
	/*
	items:[
		{xtype:'button', text:'Add Product', itemId:'AddProductBtn'},
		{xtype:'button', text:'Remove Product', itemId:'RemoveProductBtn'},
		{xtype:'button', text:'Add news', itemId:'AddNewsBtn'},
		{xtype:'button', text:'Check and modify order status', itemId:'CheckOrderStatusBtn'},
		{xtype:'button', text:'View Guest List', itemId:'ViewGuestsBtn'}
	
	],
	*/
	buttons: [ 
		{ text:'Add Product', itemId:'AddProductBtn'},
		{ text:'Remove Product', itemId:'RemoveProductBtn'},
		{ text:'Add news', itemId:'AddNewsBtn'},
		{ text:'Check and modify order status', itemId:'CheckOrderStatusBtn'},
		{ text:'View Guest List', itemId:'ViewGuestsBtn'}
	]
	
	
	});
