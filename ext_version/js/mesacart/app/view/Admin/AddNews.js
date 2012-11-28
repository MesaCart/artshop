Ext.define('MC.view.Admin.AddNews', {
	extend:'Ext.window.Window',
	title:'Add a news update',
	modal:true,
	height:300,
	width:400,
	layout:'vbox',
	//layout for fields or fieldset??
	//layout:'form'
	items:[
		{xtype:'form',
			layout:'anchor',
			defaults:{
				anchor:'100%'
			},
			defaultType:'textfield',
			//jsonSubmit:true,
			//doesnt work in this version of extjs :(
			baseParams:{
				id:'null'
			},
			url: 'http://www.mesacart.com/api/api.php/news/',
			items:[
                   
				{fieldLabel: 'News Body',
					name: 'news',
					allowBlank: false
				},
					
			],
			buttons: [
				{text:'Reset',
					handler: function(){
						this.up('form').getForm().reset();
					}
				},
				{text:'Submit News story',
					formBind: true,
					disabled:true,
					//initially disabled until form is valid
					handler: function() {
						console.log('this');
						console.log(this)
						//console.log(this.up('form').getModelData());
						var form = this.up('form').getForm(); //gets the 'BasicForm' instance
						//console.log(form.getModelData());
						var theStore = Ext.getStore('News');
						if( form.isValid()){
							var nullParams = new Object();
							nullParams.id = 'null';
							var jsonParams = Ext.Object.merge(nullParams, form.getValues());
							console.log(jsonParams);
							theStore.add(jsonParams);
							theStore.sync();
							//form.submit();
						}
					}
				
				}
			]
		}
	]

});