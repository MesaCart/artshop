Ext.define('MC.view.SideBar', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.SideBar',
	layout:{
		type:'absolute',
		align:'center'
	},
	items:[
		{ 
		y: 30,
		bodyPadding: 5,
		html:'facebook'
		}	
	]
    //... more configuration ...
});