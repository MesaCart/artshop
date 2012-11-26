Ext.define('MC.view.SideBar', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.SideBar',
	layout:{
		type:'vbox',
		align:'center',
		pack:'center'
	},
	items:[
		{ 
		bodyPadding: 5,
		html:'facebook'
		}	
	]
    //... more configuration ...
});