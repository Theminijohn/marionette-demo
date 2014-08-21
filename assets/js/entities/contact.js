ContactManager.module('Entities', function(Entities, ContactManager, Backbone, Marionette, $, _){

	// The Model
	Entities.Contact = Backbone.Model.extend({});

	// The Collection
	Entities.ContactCollection = Backbone.Collection.extend({
		model: Entities.Contact,
		comparator: 'firstName'
	})
});