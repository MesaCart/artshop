Ext.define('MC.view.CheckInForm', {
	extend:'Ext.form.Panel',
	layout:'anchor',
	defaults:{
		anchor:'100%'
	},
	defaultType:'textfield',
	url: 'http://www.mesacart.com/api/api.php/customer/',
	items:[
	
		{fieldLabel: 'Name',
			name: 'name',
			allowBlank: false
		},{ fieldLabel: 'Email',
			name: 'email',
			allowBlank: true
		},{ fieldLabel: 'Address',
			name: 'address',
			allowBlank: false
		}
	],
	
	buttons: [
				{text:'Add to GuestBook!',
					formBind: true,
					disabled:true,
					//initially disabled until form is valid
					handler: function() {
						var form = this.up('form').getForm(); //gets the 'BasicForm' instance						
						if( form.isValid()){
							
							var rec = Ext.create('MC.model.Customer', form.getValues());
							rec.save();
						}
						
						
					}
				
				}
			]
