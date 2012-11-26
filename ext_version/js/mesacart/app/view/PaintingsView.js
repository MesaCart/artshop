Ext.define('MC.view.PaintingsView',{
	extend:'Ext.panel.Panel',
	alias:'widget.PaintingsView',
	layout: 'vbox',
	items:[
		{xtype:'PaintingsGrid', flex:8 },
		{xtype:'panel', flex:2, items: [ {xtype:'button', text:'Add Selected to cart'} ]}
	]

	
});