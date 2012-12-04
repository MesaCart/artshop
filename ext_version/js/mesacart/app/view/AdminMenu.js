Ext.define('MC.view.AdminMenu', {
	extend:'Ext.panel.Panel',
	alias:'widget.AdminMenu',
	items:[
		{xtype:'button', text:'Add Product', itemId:'AddProductBtn'},
		{xtype:'button', text:'Remove Product', itemId:'RemoveProductBtn'},
		{xtype:'button', text:'Add news', itemId:'AddNewsBtn'},
		{xtype:'button', text:'Remove news', itemId:'RemoveNewsBtn'},
		{xtype:'button', text:'Check and modify order status', itemId:'CheckOrderStatusBtn'},
		{xtype:'button', text:'View Guest List', itemdId:'ViewGuestsBtn'}
	
	]
	
	
	});
