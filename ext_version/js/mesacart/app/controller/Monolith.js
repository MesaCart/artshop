Ext.define('MC.controller.Monolith', {
    extend: 'Ext.app.Controller',

	views: [
		'TopBar', 'SideBar', 'Main', 'AdminLogin', 'CustomersView', 'FramesView', 'PaintingsView'/*, 'GuestBook', 'Customers' */
	],
	
    init: function() {
		this.control({
			
			'[itemId=loginBtn]':{
				click: this.onLoginTry
			}			
				
			
		});
        console.log('Initialized Monolith controller! This happens before the Application launch function is called');
    },
	
	onLoginTry: function(button, event){
		var pwdField = button.up('panel').down('field');
		var password = pwdField.rawValue;
		if(password == 'pass1234'){
			this.openPortal(button, event);
		}		
	},

	openPortal: function(button, event){
		var tabs = this.main = button.up('panel').up('panel').up('panel');
		tabs.child('#AdminPortal').tab.show();
		tabs.setActiveTab('AdminPortal');
		tabs.child('#AdminLogin').tab.hide();
	}
	
});