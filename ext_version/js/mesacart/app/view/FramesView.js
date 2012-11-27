Ext.define('MC.view.FramesView',{
	extend:'Ext.panel.Panel',
	alias:'widget.FramesView',
	layout: 'vbox',
	items:[
		{xtype:'FramesGrid', flex:8 },
		{xtype:'panel', flex:2, items: [ {xtype:'button', text:'Add Selected to cart'} ]}
	]

	
});