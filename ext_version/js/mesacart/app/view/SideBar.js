Ext.define('MC.view.SideBar', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.SideBar',
	cls:'SideBarCls',
	layout:{
		type:'vbox',
		align:'center',
		pack:'center'
	},
	items:[
		{xtype:'button', text:'View/Edit Cart',
			handler: function(){
				var window = Ext.create('MC.view.CartWindow');
				window.show();
			}
		},
                {        html:'   <a href="https://www.paypal.com/us/cgi-bin/webscr?SESSION=2FYR2XTmOimmysij9ujlshWYlrtwGopGtYl3UssWaRZSh8GuIJUcxwhjteO&dispatch=5885d80a13c0db1f8e263663d3faee8d0b7e678a25d883d0fa72c947f193f8fd" target="_blank"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" style="border:none;max-width:100%;" alt="Checkout align="middle"" /></a><p><iframe src="//www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fmesacart&amp;width=200&amp;height=590&amp;show_faces=true&amp;colorscheme=light&amp;stream=true&amp;border_color&amp;header=true" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:200px; height:590px;" allowTransparency="true"></iframe>'}
	]
});