Ext.define('MC.view.NewsGrid',{
	extend:'Ext.grid.Panel',
	alias:'widget.NewsGrid',	
	store:'News',
	cls:'NewsGridCls',
	autoScroll:true,
	
	columns: {
		items:[
		{text:'News', 
					renderer: function(val){
						return '<p>' + val + '</p>';
					},
					dataIndex: 'news'
				},
		],
		defaults: {
				flex: 1
		}
	
	
	}	

});