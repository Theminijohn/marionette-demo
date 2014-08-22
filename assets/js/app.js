var ContactManager = new Marionette.Application();

ContactManager.addRegions({
	mainRegion: '#main-region'
})

ContactManager.on("start", function(){
  if(Backbone.history){
  	Backbone.history.start();
  }
});