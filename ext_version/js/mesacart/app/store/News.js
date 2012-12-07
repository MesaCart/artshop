Ext.define('MC.store.News',{
	extend:'Ext.data.Store',
	storeId:'NewsStore',
	model:'MC.model.NewsItem',
		
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
