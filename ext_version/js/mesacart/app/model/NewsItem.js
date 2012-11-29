Ext.define('MC.model.NewsItem', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id', type: 'int'},
		{name: 'news', type: 'string'}
	],
	
	proxy: {
        type: 'rest',
		url: 'http://www.mesacart.com/api/api.php/news',
		reader: {
			type:'json'
		},
		writer:{
			type:'json'
		}
    }
});