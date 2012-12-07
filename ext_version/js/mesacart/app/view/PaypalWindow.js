Ext.define('MC.view.PaypalWindow', {
	extend:'Ext.window.Window',
	title:'Pay with PayPal',
	modal:true,
	height:350,
	width:700,
	layout:'fit',
	items:[{
		html:'<iframe src=\"https://www.paypal.com/home\"; width=100%; height=100%></iframe>'
        }]
})